"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const navLinks = [
  { label: "Начало", href: "/#home" },
  { label: "Проекти", href: "/#projects" },
  { label: "Контакти", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm shadow-black/[0.03]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
              Semerdzhiev Designs
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-terra-light hover:text-terra transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-terra"
                  aria-label="Отвори меню"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-terra/20">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-base font-medium text-terra-light hover:text-terra transition-colors rounded-md hover:bg-terra/5"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
