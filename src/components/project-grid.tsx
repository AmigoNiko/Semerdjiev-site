"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

interface ProjectGridProps {
  categoryName: string;
  categorySlug: string;
  projects: Project[];
}

export function ProjectGrid({
  categoryName,
  categorySlug,
  projects,
}: ProjectGridProps) {
  return (
    <section className="mb-8 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl md:leading-tight font-bold bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent">
            Проекти — {categoryName}
          </h1>
          <p className="mt-4 text-forest/60 text-base sm:text-lg max-w-2xl">
            Разгледайте нашето портфолио за {categoryName.toLowerCase()} —{" "}
            {projects.length} {projects.length === 1 ? "проект" : "проекта"},
            демонстриращи нашето майсторство и внимание към детайла.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${categorySlug}/${project.slug}`}
                className="block h-full"
              >
                <Card className="overflow-hidden border-forest/10 hover:border-terra/30 transition-all duration-300 group h-full cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-lg font-semibold text-cream">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm text-forest-dark/60 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-terra text-sm font-medium group-hover:gap-3 transition-all">
                      Виж проекта
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-terra text-terra hover:bg-terra hover:text-white px-8 py-6 text-base"
            asChild
          >
            <Link href="/#projects">Виж всички категории</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
