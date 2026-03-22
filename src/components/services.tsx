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
    title: "Interior Design Consultation",
    description:
      "Personalized design consultations to understand your vision, lifestyle, and aesthetic preferences. We create comprehensive design plans tailored to your space.",
  },
  {
    icon: LayoutDashboard,
    title: "Kitchen Design & Planning",
    description:
      "Expert kitchen planning with 3D visualizations, material selection, and ergonomic layouts. Every detail is considered for both beauty and functionality.",
  },
  {
    icon: Wrench,
    title: "Full Kitchen Installation",
    description:
      "Complete kitchen installation services including cabinetry, countertops, plumbing, electrical, tiling, and finishing. Turnkey solutions from start to finish.",
  },
  {
    icon: RefreshCw,
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with our comprehensive renovation services. From structural changes to cosmetic updates, we handle every aspect of your remodel.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-warm-50">
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">
              What We Do
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-warm-900/70 max-w-2xl mx-auto text-base sm:text-lg">
            From initial concept to final installation, we provide end-to-end solutions
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
              <Card className="h-full border-gold/10 hover:border-gold/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-warm-900 group-hover:text-gold transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-900/70 leading-relaxed">
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
