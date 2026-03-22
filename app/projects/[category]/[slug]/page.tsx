import { notFound } from "next/navigation";
import {
  getAllProjectSlugsWithCategory,
  getProjectBySlug,
} from "@/lib/projects";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectDetail } from "@/components/project-detail";

export function generateStaticParams() {
  return getAllProjectSlugsWithCategory();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Не е намерено" };
  return {
    title: `${project.title} — Semerdzhiev Designs`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-16">
        <ProjectDetail project={project} categorySlug={category} />
      </main>
      <Footer />
    </>
  );
}
