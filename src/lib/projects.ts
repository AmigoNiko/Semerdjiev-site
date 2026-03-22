export type SpecRow = {
  element: string;
  material: string;
  code: string;
};

export type Project = {
  title: string;
  category: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  longDescription: string;
  location?: string;
  specs: SpecRow[];
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
    title: 'Проект „Елегантност в сиво и дъб"',
    category: "Кухня и дневна",
    slug: "elegantnost-v-sivo-i-dab",
    description:
      "Съвременен минимализъм, съчетан с усещане за уют. Контраст между топлината на дъбовия фурнир и индустриалното излъчване на тъмносивия мат.",
    image: "/projects/elegantnost-v-sivo-i-dab/1.png",
    images: [
      "/projects/elegantnost-v-sivo-i-dab/1.png",
      "/projects/elegantnost-v-sivo-i-dab/2.png",
      "/projects/elegantnost-v-sivo-i-dab/3.png",
      "/projects/elegantnost-v-sivo-i-dab/4.png",
    ],
    longDescription:
      "Тази кухня е перфектното въплъщение на съвременния минимализъм, съчетан с усещане за уют. Проектът залага на изчистени линии и функционално зониране, като акцентът пада върху контраста между топлината на дъбовия фурнир и индустриалното излъчване на тъмносивия мат. Вградените уреди и скритите решения за съхранение създават безупречна визуална хармония, а кварцовите плотове добавят нотка на лукс.",
    location: "София, България, Младост 4",
    specs: [
      { element: "Лице (Сиво)", material: "МДФ лак мат или висок клас ПДЧ мат", code: "Egger U732 PM (Dust Grey)" },
      { element: "Лице (Дъб)", material: "Фурнирован МДФ или качествен ламинат", code: "Egger H3303 ST10 (Дъб Хамилтън)" },
      { element: "Корпуси", material: "МДФ 18мм Бял мат", code: "Egger W1000 (Premium White)" },
      { element: "Работен плот", material: "Технически камък или Кварцов плот", code: "Calacatta Gold ефект" },
      { element: "Витрина", material: "Алуминиев профил с обемно стъкло", code: "Черен мат / Прозрачно стъкло" },
    ],
  },
  {
    title: 'Проект „Мраморен минимализъм и тюркоаз"',
    category: "Кухня и дневна",
    slug: "mramoren-minimalizam-i-tyurkoaz",
    description:
      "Съвременен градски стил, съчетан с усещане за простор и светлина. Луксозни мраморни повърхности, контрастиращи с модерни тюркоазени детайли и графични черни елементи.",
    image: "/projects/mramoren-minimalizam-i-tyurkoaz/1.png",
    images: [
      "/projects/mramoren-minimalizam-i-tyurkoaz/1.png",
      "/projects/mramoren-minimalizam-i-tyurkoaz/2.png",
      "/projects/mramoren-minimalizam-i-tyurkoaz/3.png",
      "/projects/mramoren-minimalizam-i-tyurkoaz/4.png",
      "/projects/mramoren-minimalizam-i-tyurkoaz/5.png",
      "/projects/mramoren-minimalizam-i-tyurkoaz/6.png",
    ],
    longDescription:
      "Този интериор е перфектното въплъщение на съвременния градски стил, съчетан с усещане за простор и светлина. Проектът залага на изчистени линии и функционално зониране на отвореното пространство. Акцентът пада върху луксозното излъчване на мраморните повърхности, които контрастират с модерните тюркоазени детайли и графичните черни елементи. Интегрираната кухня и минималистичната ТВ секция създават безупречна визуална хармония, а естествената светлина подчертава дълбочината на използваните текстури.",
    location: "София, България, Дружба",
    specs: [
      { element: "Лице (Кухня и Секция)", material: "МДФ лак мат или висок клас ПДЧ", code: "Egger W1000 PM (Premium White) / U732" },
      { element: "Работен плот / Гръб", material: "Технически камък или Стенен панел", code: "Calacatta Marble ефект" },
      { element: "ТВ Стена", material: "Декоративен панел с мраморен декор", code: 'Мрамор „Grey Light"' },
      { element: "Трапезна маса", material: "Плот с мраморен ефект и метална основа", code: "Индивидуална изработка" },
      { element: "Подова настилка", material: "Ламиниран паркет / Трислоен паркет", code: "Дъб (Класическа рибена кост)" },
      { element: "Акценти / Декор", material: "Цветно стъкло и прахово боядисан метал", code: "Тюркоаз / Черен мат" },
    ],
  },
  {
    title: 'Проект „Графитен комфорт и дъб"',
    category: "Спалня и детска стая",
    slug: "grafiten-komfort-i-dab",
    description:
      "Модерен градски шик, където функционалността среща изтънчения дизайн. Смел контраст между дълбокото антрацитно сиво и топлината на естествения дъб.",
    image: "/projects/grafiten-komfort-i-dab/1.png",
    images: [
      "/projects/grafiten-komfort-i-dab/1.png",
      "/projects/grafiten-komfort-i-dab/2.png",
      "/projects/grafiten-komfort-i-dab/3.png",
      "/projects/grafiten-komfort-i-dab/4.png",
    ],
    longDescription:
      "Тази спалня е олицетворение на модерния градски шик, където функционалността среща изтънчения дизайн. Проектът залага на смел контраст между дълбокото антрацитно сиво и топлината на естествения дъб. Пространството е умело зонирано, интегрирайки комфортна зона за сън, ергономичен работен кът под прозореца и обширна гардеробна система с открити елементи. Фрезованите стенни панели и деликатното вградено осветление добавят текстура и дълбочина, превръщайки стаята в уютно убежище с подчертан характер.",
    location: "София, България, Малинова долина",
    specs: [
      { element: "Лице (Гардероби и бюра)", material: "МДФ лак мат или ПДЧ висок клас", code: "Anthracite Grey (U961) / Дъб Натурал" },
      { element: "Стенна декорация (Гръб)", material: "Фрезован МДФ панел (вертикални линии)", code: "Индивидуално боядисан – Антрацит мат" },
      { element: "ТВ Стена", material: "Стенен панел с декор бял мрамор", code: "Calacatta Borghini ефект" },
      { element: "Осветление", material: "Модерна LED полилей-рингова система", code: "Черен мат / Топла светлина" },
      { element: "Механизми / Профили", material: "Алуминиева рамка със стъкло", code: "Черен профил / Графитено стъкло" },
      { element: "Подова настилка", material: "Ламиниран паркет", code: "Светъл дъб (Натурална текстура)" },
    ],
  },
];

const categorySlugs: Record<string, string> = {
  "Кухня и дневна": "kuhnya-i-dnevna",
  "Спалня и детска стая": "spalnya-i-detska-staya",
};

const categoryDescriptions: Record<string, string> = {
  "Кухня и дневна": "Модерни кухни и уютни дневни пространства — от функционални решения до елегантен дизайн",
  "Спалня и детска стая": "Спокойни спални и креативни детски стаи, проектирани за комфорт и стил",
};

export function getCategorySlug(name: string): string {
  return categorySlugs[name] || name.toLowerCase().replace(/\s+/g, "-");
}

export function getCategories(): Category[] {
  const categoryMap = new Map<string, { count: number; image: string; description: string }>();

  for (const project of projects) {
    const existing = categoryMap.get(project.category);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(project.category, {
        count: 1,
        image: project.image,
        description: categoryDescriptions[project.category] || "",
      });
    }
  }

  return Array.from(categoryMap.entries()).map(([name, data]) => ({
    name,
    slug: getCategorySlug(name),
    description: data.description,
    image: data.image,
    count: data.count,
  }));
}

export function getProjectsByCategory(slug: string): Project[] {
  return projects.filter(
    (p) => getCategorySlug(p.category) === slug
  );
}

export function getCategoryName(slug: string): string | undefined {
  const cat = getCategories().find((c) => c.slug === slug);
  return cat?.name;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugsWithCategory(): { category: string; slug: string }[] {
  return projects.map((p) => ({
    category: getCategorySlug(p.category),
    slug: p.slug,
  }));
}
