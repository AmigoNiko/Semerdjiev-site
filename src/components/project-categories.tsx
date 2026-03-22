"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/projects";

const categories = getCategories();

export function ProjectCategories() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-cream">
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
              Портфолио
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-terra" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
            Нашите проекти
          </h2>
          <p className="mt-4 text-forest/60 max-w-2xl mx-auto text-base sm:text-lg">
            Разгледайте нашите проекти по категория — от кухни до спални, всяко пространство разказва история
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${category.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full rounded-xl overflow-hidden border border-forest/10 hover:border-terra/30 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-terra/90 text-white text-xs font-semibold backdrop-blur-sm">
                        {category.count} {category.count === 1 ? "Проект" : "Проекта"}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-2 group-hover:text-terra-light transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed line-clamp-2 mb-3">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-terra-light text-sm font-medium group-hover:gap-3 transition-all">
                      Виж проектите
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
