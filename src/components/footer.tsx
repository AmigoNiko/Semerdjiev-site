import { Instagram, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Начало", href: "#home" },
  { label: "Проекти", href: "#projects" },
  { label: "Контакти", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-forest-dark dark:bg-forest-950 border-t border-terra/10">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-terra/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <span className="font-serif text-2xl font-bold bg-gradient-to-r from-terra to-brown-light bg-clip-text text-transparent">
              Semerdzhiev Designs
            </span>
            <p className="mt-3 text-cream/50 text-sm leading-relaxed max-w-xs">
              Превръщаме пространствата в изключителни преживявания.
              Първокласен интериорен дизайн и монтаж на кухни.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-cream mb-4">
              Бързи връзки
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/50 hover:text-terra transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-cream mb-4">
              Последвайте ни
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-cream/10 flex items-center justify-center text-cream/50 hover:bg-terra/20 hover:text-terra transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10">
          <p className="text-center text-cream/30 text-sm">
            &copy; {new Date().getFullYear()} Semerdzhiev Designs. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
