"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src={heroBg}
        alt="Интериорен дизайн на кухня"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />

      <div className="absolute inset-0 bg-[rgba(20,15,10,0.60)]" />
      <div className="absolute inset-0 bg-[rgba(30,20,10,0.52)]" />
      <div className="absolute inset-0 bg-[rgba(15,10,5,0.62)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
              Интериорен дизайн и
            </span>
            <br />
            <span className="bg-gradient-to-r from-brown-light to-terra bg-clip-text text-transparent">
              проектиране на мебели
            </span>
          </h1>

          <div className="max-w-2xl mx-auto mb-10 space-y-4">
            <p className="text-cream/70 text-base sm:text-lg md:text-xl font-sans leading-relaxed italic">
              Създавам функционални и модерни интериори решения, съобразени с
              вашето пространство, стил и бюджет.
            </p>
            <p className="text-cream/80 text-base sm:text-lg md:text-xl font-sans leading-relaxed font-semibold">
              От идея до реализация – всичко започва с добър проект.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-terra text-terra hover:bg-terra hover:text-white text-base px-8 py-6 tracking-wide"
              asChild
            >
              <a href="#projects">Вижте нашите проекти</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-cream/80 hover:text-terra text-base px-8 py-6"
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
