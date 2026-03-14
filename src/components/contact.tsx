"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Upload,
  X,
  ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+359 888 123 456",
    href: "tel:+359888123456",
  },
  {
    icon: Mail,
    label: "Имейл",
    value: "info@luksinteriori.bg",
    href: "mailto:info@luksinteriori.bg",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "бул. Витоша 123, ет. 2\nСофия 1000",
  },
  {
    icon: Clock,
    label: "Работно време",
    value: "Пон - Пет: 9:00 - 18:00\nСъб: 10:00 - 16:00",
  },
];

const roomTypes = [
  "Кухня",
  "Спалня",
  "Дневна",
  "Баня",
  "Трапезария",
  "Детска стая",
  "Друго",
];

export function Contact() {
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [photos, setPhotos] = useState<{ name: string; size: string }[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newPhotos = Array.from(files).map((file) => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream dark:bg-forest-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-terra" />
            <span className="text-terra text-sm tracking-[0.3em] uppercase font-sans">
              Свържете се с нас
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-terra" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
            Започнете вашия проект
          </h2>
          <p className="mt-4 text-forest-dark/60 dark:text-cream/60 max-w-2xl mx-auto text-base sm:text-lg">
            Разкажете ни за вашата визия. Споделете снимки на текущото пространство
            и ние ще ви помогнем да го превърнете в нещо изключително.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-forest/10 dark:border-cream/10">
              <CardContent className="p-6 sm:p-8">
                <form
                  ref={formRef}
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = formRef.current;
                    if (!form) return;
                    setStatus("sending");
                    setErrorMessage("");
                    try {
                      const name = (form.querySelector("#name") as HTMLInputElement)?.value?.trim() ?? "";
                      const email = (form.querySelector("#email") as HTMLInputElement)?.value?.trim() ?? "";
                      const phone = (form.querySelector("#phone") as HTMLInputElement)?.value?.trim() ?? "";
                      const address = (form.querySelector("#address") as HTMLInputElement)?.value?.trim() ?? "";
                      const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value?.trim() ?? "";
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,
                          email,
                          phone: phone || undefined,
                          address: address || undefined,
                          roomType: selectedRoom || undefined,
                          message,
                          photoNames: photos.map((p) => p.name),
                        }),
                      });
                      const data = await res.json().catch(() => ({}));
                      if (!res.ok) {
                        setStatus("error");
                        setErrorMessage(data?.error ?? "Неуспешно изпращане.");
                        return;
                      }
                      setStatus("success");
                      form.reset();
                      setSelectedRoom("");
                      setPhotos([]);
                    } catch {
                      setStatus("error");
                      setErrorMessage("Възникна грешка. Моля, опитайте отново.");
                    }
                  }}
                >
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-forest-dark dark:text-cream mb-4">
                      Вашата информация
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-forest-dark dark:text-cream">
                          Име и фамилия *
                        </Label>
                        <Input id="name" placeholder="Иван Иванов" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-forest-dark dark:text-cream">
                          Имейл *
                        </Label>
                        <Input id="email" type="email" placeholder="ivan@email.com" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-forest-dark dark:text-cream">
                          Телефон
                        </Label>
                        <Input id="phone" type="tel" placeholder="+359 888 000 000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-forest-dark dark:text-cream">
                          Адрес на имота
                        </Label>
                        <Input id="address" placeholder="ул. Примерна 1, София" />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-forest/10 dark:bg-cream/10" />

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-forest-dark dark:text-cream mb-4">
                      Детайли за проекта
                    </h3>

                    <div className="space-y-3 mb-5">
                      <Label className="text-forest-dark dark:text-cream">
                        Тип помещение *
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {roomTypes.map((room) => (
                          <button
                            key={room}
                            type="button"
                            onClick={() => setSelectedRoom(room)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                              selectedRoom === room
                                ? "bg-terra text-white border-terra"
                                : "border-forest/20 dark:border-cream/20 text-forest-dark dark:text-cream hover:border-terra hover:text-terra"
                            }`}
                          >
                            {selectedRoom === room && (
                              <CheckCircle2 className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                            )}
                            {room}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-forest-dark dark:text-cream">
                        Описание на проекта *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Опишете вашата визия — какъв стил предпочитате? Имате ли конкретни материали, цветове или характеристики предвид? Какви са текущите проблеми на пространството?"
                        className="min-h-[140px]"
                        required
                      />
                    </div>
                  </div>

                  <Separator className="bg-forest/10 dark:bg-cream/10" />

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-forest-dark dark:text-cream mb-2">
                      Снимки на пространството
                    </h3>
                    <p className="text-sm text-forest-dark/50 dark:text-cream/50 mb-4">
                      Качете снимки на текущото пространство, за да можем по-добре да разберем
                      разположението и да предоставим точна оценка.
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                      id="photo-upload"
                    />

                    <label
                      htmlFor="photo-upload"
                      className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-forest/20 dark:border-cream/20 rounded-xl p-8 cursor-pointer hover:border-terra/50 hover:bg-terra/5 transition-all group"
                    >
                      <div className="h-12 w-12 rounded-full bg-terra/10 flex items-center justify-center group-hover:bg-terra/20 transition-colors">
                        <Upload className="h-5 w-5 text-terra" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-medium text-forest-dark dark:text-cream">
                          Натиснете за качване на снимки
                        </span>
                        <p className="text-xs text-forest-dark/40 dark:text-cream/40 mt-1">
                          JPG, PNG, WEBP до 10MB на файл
                        </p>
                      </div>
                    </label>

                    {photos.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {photos.map((photo, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-4 py-3 rounded-lg bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-cream/10"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <ImageIcon className="h-4 w-4 text-terra shrink-0" />
                              <span className="text-sm text-forest-dark dark:text-cream truncate">
                                {photo.name}
                              </span>
                              <span className="text-xs text-forest-dark/40 dark:text-cream/40 shrink-0">
                                {photo.size}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="text-forest-dark/40 dark:text-cream/40 hover:text-terra transition-colors shrink-0 ml-2"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {status === "success" && (
                    <p className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Запитването е изпратено успешно. Ще се свържем с вас скоро.
                    </p>
                  )}
                  {status === "error" && errorMessage && (
                    <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                      {errorMessage}
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto bg-terra hover:bg-terra-light text-white font-semibold px-10 py-6 text-base tracking-wide disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === "sending" ? "Изпращане..." : "Изпратете запитване"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest-dark dark:text-cream mb-6">
                Информация за контакт
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0 h-12 w-12 rounded-lg bg-terra/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-terra" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-terra mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-forest-dark/70 dark:text-cream/70 hover:text-terra transition-colors whitespace-pre-line text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-forest-dark/70 dark:text-cream/70 whitespace-pre-line text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-terra/15" />

            <div>
              <h3 className="font-serif text-xl font-semibold text-forest-dark dark:text-cream mb-4">
                Какво да очаквате
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Преглеждаме детайлите и снимките на проекта ви в рамките на 24 часа" },
                  { step: "2", text: "Дизайнер се свързва с вас за безплатна консултация" },
                  { step: "3", text: "Посещаваме пространството ви за замерване и оценка" },
                  { step: "4", text: "Получавате подробно предложение с 3D визуализации" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="shrink-0 h-7 w-7 rounded-full bg-terra text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {item.step}
                    </span>
                    <p className="text-sm text-forest-dark/70 dark:text-cream/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
