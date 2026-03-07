import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectCategories } from "@/components/project-categories";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectCategories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
