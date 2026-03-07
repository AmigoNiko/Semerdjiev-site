import { notFound } from "next/navigation";
import {
  getCategories,
  getProjectsByCategory,
  getCategoryName,
} from "@/lib/projects";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectGrid } from "@/components/project-grid";

export function generateStaticParams() {
  return getCategories().map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const name = getCategoryName(category);
  if (!name) return { title: "Не е намерено" };
  return {
    title: `${name} Проекти — Semerdzhiev Designs`,
    description: `Разгледайте нашите проекти за ${name.toLowerCase()} — дизайн и монтаж.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = getCategoryName(category);
  if (!categoryName) notFound();

  const projects = getProjectsByCategory(category);

  return (
    <>
      <Header />
      <main className="pt-16">
        <ProjectGrid categoryName={categoryName} projects={projects} />
      </main>
      <Footer />
    </>
  );
}
