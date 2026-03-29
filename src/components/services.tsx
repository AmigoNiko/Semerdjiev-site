"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  LayoutDashboard,
  Wrench,
  RefreshCw,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Paintbrush,
    title: "Консултация по интериорен дизайн",
    description:
      "Персонализирани дизайнерски консултации, за да разберем вашата визия, начин на живот и естетически предпочитания. Създаваме цялостни дизайнерски планове, съобразени с вашето пространство.",
  },
  {
    icon: LayoutDashboard,
    title: "Проектиране на кухни",
    description:
      "Експертно планиране на кухни с 3D визуализации, подбор на материали и ергономични разпределения. Всеки детайл е обмислен за красота и функционалност.",
  },
  {
    icon: Wrench,
    title: "Пълен монтаж на кухни",
    description:
      "Цялостни услуги по монтаж на кухни, включващи корпуси, плотове, ВиК, електричество, облицовки и довършителни работи. Решения от начало до край.",
  },
  {
    icon: RefreshCw,
    title: "Ремонт и обновяване",
    description:
      "Трансформирайте съществуващи пространства с нашите цялостни ремонтни услуги. От конструктивни промени до козметични обновявания — ние се справяме с всеки аспект.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-cream-dark/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold-dark text-sm tracking-[0.3em] uppercase font-sans">
              Какво правим
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
            Нашите услуги
          </h2>
          <p className="mt-4 text-forest/70 max-w-2xl mx-auto text-base sm:text-lg">
            От първоначалната концепция до финалния монтаж — предоставяме цялостни решения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-gold/15 hover:border-gold/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold-dark group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-forest-dark group-hover:text-terra transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
