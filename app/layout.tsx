import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semerdzhiev Designs — Интериорен дизайн и проектиране на мебели",
  description:
    "Създавам функционални и модерни интериори решения, съобразени с вашето пространство, стил и бюджет.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
