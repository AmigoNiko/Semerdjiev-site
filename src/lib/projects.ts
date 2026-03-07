export type Project = {
  title: string;
  category: string;
  slug: string;
  description: string;
  image: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
};

export const projects: Project[] = [
  {
    title: "Модерна минималистична кухня",
    category: "Кухня",
    slug: "moderna-minimalistichna-kuhnya",
    description:
      "Елегантен дизайн без дръжки с вградени уреди, кварцови плотове и скрити решения за съхранение за безупречна естетика.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Съвременна тъмна кухня",
    category: "Кухня",
    slug: "savremenna-tamna-kuhnya",
    description:
      "Смели тъмни шкафове, съчетани с месингов обков и мраморен гръб, създаващи драматично, но изискано пространство за готвене.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Класическа кухня Шейкър",
    category: "Кухня",
    slug: "klasicheska-kuhnya-sheykar",
    description:
      "Вечен дизайн в стил Шейкър с първокласни каменни плотове и месингови акценти. Перфектен баланс между традиция и модерна функционалност.",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Реновация на фермерска кухня",
    category: "Кухня",
    slug: "renovatsiya-fermerska-kuhnya",
    description:
      "Топли дървени шкафове, мивка с престилка и открити рафтове. Гостоприемна фермерска кухня, която е едновременно рустикална и изтънчена.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Уютна главна спалня",
    category: "Спалня",
    slug: "uyutna-glavna-spalnya",
    description:
      "Топли дървени тонове и меки текстили, създаващи спокойно спално убежище с вградени гардероби и амбиентно осветление.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Минималистичен спален апартамент",
    category: "Спалня",
    slug: "minimalistichen-spalen-apartament",
    description:
      "Чисти линии, неутрална палитра и плаващо легло. Спокойно пространство, проектирано за пълна релаксация и спокоен сън.",
    image:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Луксозна гостна спалня",
    category: "Спалня",
    slug: "luksozna-gostna-spalnya",
    description:
      "Приветлива гостна стая с луксозно спално бельо, акцентна стена и удобства за хотелско преживяване у дома.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Луксозен отворен план на дневна",
    category: "Дневна",
    slug: "luksozen-otvoren-plan-dnevna",
    description:
      "Просторно открито пространство, обединяващо кухня, трапезария и дневна зона с дизайнерски мебели и подбрано изкуство.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Съвременна всекидневна",
    category: "Дневна",
    slug: "savremenna-vsekidnevna",
    description:
      "Модерна всекидневна със секционен диван, акцентно осветление и медийна стена, балансираща забавление с елегантен дизайн.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Уютен кът за четене",
    category: "Дневна",
    slug: "uyuten-kat-za-chetene",
    description:
      "Дневна, проектирана около комфорта — с вградени библиотеки, прозоречни седалки и пластове от топли текстили.",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "СПА-вдъхновена баня",
    category: "Баня",
    slug: "spa-vdahnovena-banya",
    description:
      "Естествен камък, дъждовен душ и топло амбиентно осветление, проектирани за ежедневна релаксация и възстановяване.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Модерна мраморна баня",
    category: "Баня",
    slug: "moderna-mramorna-banya",
    description:
      "Мрамор от пода до тавана, свободно стояща вана и черни матови смесители, създаващи луксозно и вечно банско пространство.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Скандинавска трапезария",
    category: "Трапезария",
    slug: "skandinavska-trapezariya",
    description:
      "Чисти линии, светли дървесини и внимателно подбрано осветление за приветлива трапезария, обединяваща семейството.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Официална трапезария",
    category: "Трапезария",
    slug: "ofitsialna-trapezariya",
    description:
      "Елегантна трапезария с ефектен полилей, тапицирани столове и богати стенни покрития за запомнящи се събирания.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Весела детска стая",
    category: "Детска стая",
    slug: "vesela-detska-staya",
    description:
      "Жизнено, но организирано пространство с вградено съхранение, игриви дизайнерски елементи и уютен кът за четене.",
    image:
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Тийнейджърска стая за учене",
    category: "Детска стая",
    slug: "tiyneydzharsk-staya-za-uchene",
    description:
      "Стилна тийнейджърска стая с интегрирана работна зона, достатъчно място за съхранение и дизайн, който расте с тях.",
    image:
      "https://images.unsplash.com/photo-1632210706560-4eccbee60251?q=80&w=800&auto=format&fit=crop",
  },
];

export function getCategories(): Category[] {
  const categoryMap = new Map<string, { count: number; image: string; description: string }>();

  const descriptions: Record<string, string> = {
    "Кухня": "Модерни и класически кухненски дизайни с първокласен монтаж и довършителни работи",
    "Спалня": "Спокойни спални убежища, проектирани за комфорт, стил и пълноценна почивка",
    "Дневна": "Елегантни дневни пространства, съчетаващи комфорт с изискан дизайн",
    "Баня": "СПА-вдъхновени бани с луксозни материали и внимателно планирани решения",
    "Трапезария": "Приветливи трапезарии, перфектни за семейни събирания и незабравими вечери",
    "Детска стая": "Креативни и функционални пространства за игра, учене и израстване",
  };

  for (const project of projects) {
    const existing = categoryMap.get(project.category);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(project.category, {
        count: 1,
        image: project.image,
        description: descriptions[project.category] || "",
      });
    }
  }

  return Array.from(categoryMap.entries()).map(([name, data]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    description: data.description,
    image: data.image,
    count: data.count,
  }));
}

export function getProjectsByCategory(slug: string): Project[] {
  return projects.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function getCategoryName(slug: string): string | undefined {
  const cat = getCategories().find((c) => c.slug === slug);
  return cat?.name;
}
