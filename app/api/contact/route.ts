import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "angelsemerdzhiev.design@gmail.com";

// Resend free tier: use "onboarding@resend.dev" as sender (no display name).
// After verifying your domain at https://resend.com/domains set RESEND_FROM_EMAIL e.g. "Portfolio <contact@yourdomain.com>"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  roomType?: string;
  message: string;
  photoNames?: string[];
};

function buildEmailHtml(data: ContactPayload): string {
  const rows = [
    ["Име и фамилия", data.name],
    ["Имейл", data.email],
    ["Телефон", data.phone || "—"],
    ["Адрес на имота", data.address || "—"],
    ["Тип помещение", data.roomType || "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;vertical-align:top;width:160px;">${label}</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(String(value))}</td></tr>`
    )
    .join("");

  const photosSection =
    data.photoNames && data.photoNames.length > 0
      ? `
    <tr><td colspan="2" style="padding:12px 0 4px;font-weight:600;color:#374151;">Прикачени снимки</td></tr>
    <tr><td colspan="2" style="padding:4px 12px;color:#6b7280;font-size:14px;">${data.photoNames.map((n) => escapeHtml(n)).join(", ")}</td></tr>
  `
      : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f9fafb;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);overflow:hidden;">
    <div style="background:linear-gradient(135deg,#8b6914 0%,#a67c18 100%);color:#fff;padding:20px 24px;">
      <h1 style="margin:0;font-size:20px;font-weight:600;">Ново запитване от контактната форма</h1>
      <p style="margin:8px 0 0;opacity:0.9;font-size:14px;">Портфолио уебсайт</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        ${rows}
        ${photosSection}
      </table>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e5e7eb;">
        <div style="font-weight:600;color:#374151;margin-bottom:8px;">Описание на проекта</div>
        <div style="color:#1f2937;white-space:pre-wrap;line-height:1.5;">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <div style="padding:12px 24px;background:#f9fafb;font-size:12px;color:#6b7280;">
      Изпратено на ${new Date().toLocaleString("bg-BG", { dateStyle: "medium", timeStyle: "short" })}
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let name: string;
    let email: string;
    let message: string;
    let phone: string | undefined;
    let address: string | undefined;
    let roomType: string | undefined;
    let photoNames: string[] = [];
    let attachments: { filename: string; content: Buffer }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = (formData.get("name") as string | null)?.trim() ?? "";
      email = (formData.get("email") as string | null)?.trim() ?? "";
      message = (formData.get("message") as string | null)?.trim() ?? "";
      const phoneVal = formData.get("phone") as string | null;
      phone = phoneVal?.trim() || undefined;
      const addressVal = formData.get("address") as string | null;
      address = addressVal?.trim() || undefined;
      const roomVal = formData.get("roomType") as string | null;
      roomType = roomVal?.trim() || undefined;
      const files = formData.getAll("photos") as Blob[];
      for (const file of files) {
        if (!file || typeof file.size !== "number") continue;
        const buffer = Buffer.from(await (file as Blob).arrayBuffer());
        const filename =
          file instanceof File ? file.name : `attachment-${Date.now()}-${attachments.length}`;
        photoNames.push(filename);
        attachments.push({ filename, content: buffer });
      }
    } else {
      const body = (await request.json()) as ContactPayload;
      name = typeof body?.name === "string" ? body.name.trim() : "";
      email = typeof body?.email === "string" ? body.email.trim() : "";
      message = typeof body?.message === "string" ? body.message.trim() : "";
      phone = typeof body?.phone === "string" ? body.phone.trim() || undefined : undefined;
      address = typeof body?.address === "string" ? body.address.trim() || undefined : undefined;
      roomType = typeof body?.roomType === "string" ? body.roomType.trim() || undefined : undefined;
      photoNames = Array.isArray(body?.photoNames) ? body.photoNames : [];
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Липсват име, имейл или съобщение." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.trim() === "") {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Конфигурационна грешка. Моля, опитайте по-късно." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const payload: ContactPayload = {
      name,
      email,
      phone,
      address,
      roomType,
      message,
      photoNames: photoNames.length > 0 ? photoNames : undefined,
    };

    const subjectDate = new Date().toLocaleString("bg-BG", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Ново запитване от ${name} — Портфолио — ${subjectDate}`,
      html: buildEmailHtml(payload),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      const errMsg = typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: unknown }).message)
        : String(error);
      console.error("Resend error:", errMsg, error);
      const isDev = process.env.NODE_ENV === "development";
      return NextResponse.json(
        {
          error: isDev
            ? `Resend: ${errMsg}`
            : "Неуспешно изпращане. Моля, опитайте отново.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Възникна грешка. Моля, опитайте по-късно." },
      { status: 500 }
    );
  }
}
