"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/hero-bg.png";

const heroImages = [
  { src: heroBg, alt: "Интериорен дизайн на кухня", blur: true },
  { src: "/projects/grafiten-komfort-i-dab/2.png", alt: "Спалня с графитен дизайн", blur: false },
  { src: "/projects/mramoren-minimalizam-i-tyurkoaz/5.png", alt: "Кухня с мраморни акценти", blur: false },
];

const INTERVAL = 6000;

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            {...(heroImages[current].blur ? { placeholder: "blur" } : {})}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[rgba(20,20,25,0.52)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-cream drop-shadow-lg">
            Интериорен дизайн и
            <br />
            <span className="text-gold-light">
              проектиране на мебели
            </span>
          </h1>

          <div className="max-w-2xl mx-auto mb-10 space-y-4">
            <p className="text-cream/85 text-base sm:text-lg md:text-xl font-sans leading-relaxed italic drop-shadow-sm">
              Създавам функционални и модерни интериори решения, съобразени с
              вашето пространство, стил и бюджет.
            </p>
            <p className="text-cream/90 text-base sm:text-lg md:text-xl font-sans leading-relaxed font-semibold drop-shadow-sm">
              От идея до реализация – всичко започва с добър проект.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-cream/80 text-cream hover:bg-terra hover:text-white hover:border-terra text-base px-8 py-6 tracking-wide"
              asChild
            >
              <a href="#projects">Вижте нашите проекти</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-cream/80 hover:text-cream text-base px-8 py-6"
              asChild
            >
              <a href="#contact">Свържете се с нас</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
