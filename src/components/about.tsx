"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "15+", label: "Години опит" },
  { value: "500+", label: "Завършени проекта" },
  { value: "100%", label: "Доволни клиенти" },
  { value: "50+", label: "Награди за дизайн" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                alt="Интериорен дизайн"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-terra/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-terra" />
              <span className="text-terra text-sm tracking-[0.3em] uppercase font-sans">
                За нас
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
              Създаваме пространства, които вдъхновяват
            </h2>

            <Separator className="mb-6 w-24 bg-terra/30" />

            <div className="space-y-4 text-forest-dark/70 leading-relaxed">
              <p>
                С над 15 години опит в интериорния дизайн и монтажа на кухни,
                ние съчетаваме креативност и техническа експертиза във всеки проект.
                Нашият екип от опитни дизайнери и майстори е отдаден на създаването
                на пространства, които отразяват вашата личност и подобряват ежедневието ви.
              </p>
              <p>
                От концепцията до завършването работим в тясно сътрудничество с нашите
                клиенти, за да гарантираме, че всеки детайл е перфектен. Независимо дали
                става дума за цялостна реновация на кухня или пълен интериорен редизайн,
                ние постигаме изключителни резултати, които издържат на времето.
              </p>
              <p>
                Нашият подход съчетава вечни дизайнерски принципи с модерни иновации,
                използвайки първокласни материали и прецизно майсторство за създаване
                на пространства, които са едновременно красиви и функционални.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-terra/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-forest-dark/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
