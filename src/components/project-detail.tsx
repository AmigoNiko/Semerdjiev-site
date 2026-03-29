"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Project } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
  categorySlug: string;
}

export function ProjectDetail({ project, categorySlug }: ProjectDetailProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  function onSelect() {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }

  return (
    <section className="mb-8 bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            className="mb-8 text-terra hover:text-terra-light -ml-2"
            asChild
          >
            <Link href={`/projects/${categorySlug}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Обратно към {project.category}
            </Link>
          </Button>

          <div className="relative rounded-xl overflow-hidden bg-forest-950/5">
            <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
              <CarouselContent
                className=""
                ref={() => {
                  if (api) {
                    api.on("select", onSelect);
                  }
                }}
              >
                {project.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                      <Image
                        src={img}
                        alt={`${project.title} — снимка ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1100px"
                        priority={i === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-forest-dark hover:bg-white transition-colors shadow-md"
                    aria-label="Предишна снимка"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => api?.scrollNext()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-forest-dark hover:bg-white transition-colors shadow-md"
                    aria-label="Следваща снимка"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === current
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Снимка ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </Carousel>
          </div>

          <div className="mt-10 sm:mt-14">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-snug bg-gradient-to-r from-terra to-brown bg-clip-text text-transparent mb-4 pb-1">
              {project.title}
            </h1>

            {project.location && (
              <div className="flex items-center gap-2 text-forest/70 mt-2">
                <MapPin className="h-4 w-4 text-gold-dark shrink-0" />
                <span className="text-sm font-medium">{project.location}</span>
              </div>
            )}

            <p className="text-forest/70 text-base sm:text-lg leading-relaxed max-w-3xl mt-6">
              {project.longDescription}
            </p>
          </div>

          {project.specs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 sm:mt-16"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mb-6">
                Техническа спецификация
              </h2>

              <div className="hidden sm:block rounded-xl border border-forest/10 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-forest-dark/5">
                      <th className="text-left px-5 py-3.5 font-semibold text-forest-dark">
                        Елемент
                      </th>
                      <th className="text-left px-5 py-3.5 font-semibold text-forest-dark">
                        Материал
                      </th>
                      <th className="text-left px-5 py-3.5 font-semibold text-forest-dark">
                        Код / Референция
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={`border-t border-forest/8 ${
                          i % 2 === 0 ? "bg-white" : "bg-forest-dark/[0.02]"
                        }`}
                      >
                        <td className="px-5 py-3.5 font-medium text-forest-dark">
                          {spec.element}
                        </td>
                        <td className="px-5 py-3.5 text-forest/70">
                          {spec.material}
                        </td>
                        <td className="px-5 py-3.5 text-forest/70 font-mono text-xs">
                          {spec.code}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden space-y-3">
                {project.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-forest/10 bg-white p-4 space-y-2"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold">
                        Елемент
                      </span>
                      <div className="font-medium text-forest-dark text-sm mt-0.5">
                        {spec.element}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold">
                        Материал
                      </span>
                      <div className="text-forest/70 text-sm mt-0.5">
                        {spec.material}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold-dark font-semibold">
                        Код / Референция
                      </span>
                      <div className="text-forest/65 text-xs mt-0.5 font-mono">
                        {spec.code}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
