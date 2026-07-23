import {
  contactLinks as baseContactLinks,
  gallerySections as baseGallerySections,
  heroQuote as baseHeroQuote,
  type ContactLink,
  type GalleryItem,
  type GallerySection,
  type SectionLink
} from "@/data/site-content";

export type Language = "en" | "es";

export type ContactFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  backupPrefix: string;
  backupLinkLabel: string;
  backupSuffix: string;
};

export type InterfaceCopy = {
  languageSwitchLabel: string;
  heroImageAlt: string;
  heroSummary: string;
  heroNavLabel: string;
  heroCta: string;
  sectionNavLabel: string;
  researchIntro: string;
  researchThemesLabel: string;
  slowballKicker: string;
  slowballDescription: string;
  slowballLinkLabel: string;
  slowballPanelCaption: string;
  innovationKicker: string;
  innovationTitle: string;
  innovationParagraphs: [string, string];
  teachingKicker: string;
  teachingTitle: string;
  teachingDescription: string;
  contactHeading: string;
  footerText: string;
  contactForm: ContactFormCopy;
};

type LocalizedQuote = {
  text: string;
  attribution: string;
  sourceHref: string;
};

const SECTION_LABELS: Record<Language, Record<string, string>> = {
  en: {
    research: "Research",
    software: "Software",
    slowball: "Investing",
    literature: "Literature",
    innovation: "Technology & Innovation",
    teaching: "Teaching",
    contact: "Contact"
  },
  es: {
    research: "Investigación",
    software: "Software",
    slowball: "Inversión",
    literature: "Literatura",
    innovation: "Tecnología e Innovación",
    teaching: "Docencia",
    contact: "Contacto"
  }
};

const INTERFACE_COPY: Record<Language, InterfaceCopy> = {
  en: {
    languageSwitchLabel: "Language",
    heroImageAlt: "Pablo Aurelio Gomez Garcia in a vintage study portrait.",
    heroSummary:
      "I work as a senior scientist at ETH Zurich on imaging, biophysics, and the behavior of living matter. I also write novels, short stories, and essays; build software and decision tools; and spend a good part of my time thinking about capital, technology, and how people manage wealth with more clarity. This page brings those lines of work into one quiet place.",
    heroNavLabel: "Hero navigation",
    heroCta: "Enter the study",
    sectionNavLabel: "Section navigation",
    researchIntro:
      "Fourteen peer-reviewed journal papers across chromatin dynamics, genome regulation, stem cells, microscopy, stress biology, and the biophysics of living matter.",
    researchThemesLabel: "Research themes",
    slowballKicker: "Investing education",
    slowballDescription:
      "Slowball is my investing project for patient capital, financial education, and clearer reasoning under uncertainty. It is where long-horizon thinking, portfolio structure, and visual explanation come together.",
    slowballLinkLabel: "Visit slowball.ch",
    slowballPanelCaption: "Compound growth calculator",
    innovationKicker: "Patents and advisory",
    innovationTitle:
      "Science, imaging, software, and technical judgment translated into useful decisions.",
    innovationParagraphs: [
      "I work across microscopy, biophysics, instrumentation, software, and deep-tech evaluation. The same attention to experimental detail that shapes my scientific work also informs how I assess technology, product direction, and technical risk.",
      "I help founders, investment teams, and companies think through scientific claims, R&D paths, imaging systems, software tools, and whether a technology can become something robust, useful, and investable."
    ],
    teachingKicker: "Lectures, practical training, and supervision",
    teachingTitle:
      "Teaching that stays close to the bench, the microscope, and the question itself.",
    teachingDescription:
      "My teaching moves between concepts, experiments, and analysis. I enjoy explaining difficult ideas clearly, connecting methods to first principles, and helping students develop technical taste as well as confidence.",
    contactHeading: "Contact",
    footerText:
      "Research, software, literature, investing, innovation, and teaching.",
    contactForm: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Where should Pablo reply?",
      messageLabel: "Message",
      messagePlaceholder: "Write me.",
      submitLabel: "Open draft",
      backupPrefix: "If your mail app did not open, use the ",
      backupLinkLabel: "backup draft link",
      backupSuffix: "."
    }
  },
  es: {
    languageSwitchLabel: "Idioma",
    heroImageAlt:
      "Pablo Aurelio Gomez Garcia en un retrato vintage de estudio.",
    heroSummary:
      "Trabajo como científico senior en ETH Zurich en imagen, biofísica y el comportamiento de la materia viva. También escribo novelas, relatos y ensayos; desarrollo software y herramientas de decisión; y dedico buena parte de mi tiempo a pensar sobre capital, tecnología y cómo las personas gestionan su patrimonio con más claridad. Esta página reúne esas líneas de trabajo en un lugar sereno.",
    heroNavLabel: "Navegación principal",
    heroCta: "Entrar al estudio",
    sectionNavLabel: "Navegación de secciones",
    researchIntro:
      "Catorce artículos revisados por pares en dinámica de la cromatina, regulación genómica, células madre, microscopía, biología del estrés y biofísica de la materia viva.",
    researchThemesLabel: "Temas de investigación",
    slowballKicker: "Educación en inversión",
    slowballDescription:
      "Slowball es mi proyecto sobre inversión paciente, educación financiera y razonamiento más claro bajo incertidumbre. Es el lugar donde se encuentran el pensamiento de largo plazo, la estructura de cartera y la explicación visual.",
    slowballLinkLabel: "Visitar slowball.ch",
    slowballPanelCaption: "Calculadora de interés compuesto",
    innovationKicker: "Patentes y asesoría",
    innovationTitle:
      "Ciencia, imagen, software y criterio técnico traducidos en decisiones útiles.",
    innovationParagraphs: [
      "Trabajo entre microscopía, biofísica, instrumentación, software y evaluación deep-tech. La misma atención al detalle experimental que da forma a mi trabajo científico también orienta cómo evalúo tecnología, dirección de producto y riesgo técnico.",
      "Ayudo a fundadores, equipos de inversión y empresas a pensar con claridad sobre afirmaciones científicas, rutas de I+D, sistemas de imagen, herramientas de software y si una tecnología puede convertirse en algo robusto, útil e invertible."
    ],
    teachingKicker: "Clases, formación práctica y supervisión",
    teachingTitle:
      "Una docencia que se mantiene cerca del banco, del microscopio y de la pregunta misma.",
    teachingDescription:
      "Mi docencia se mueve entre conceptos, experimentos y análisis. Disfruto explicando ideas difíciles con claridad, conectando los métodos con primeros principios y ayudando a los estudiantes a desarrollar criterio técnico además de confianza.",
    contactHeading: "Contacto",
    footerText:
      "Investigación, software, literatura, inversión, innovación y docencia.",
    contactForm: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "¿Dónde debería responder Pablo?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escríbeme.",
      submitLabel: "Abrir borrador",
      backupPrefix: "Si no se abrió tu aplicación de correo, usa el ",
      backupLinkLabel: "enlace alternativo al borrador",
      backupSuffix: "."
    }
  }
};

const QUOTES: Record<Language, LocalizedQuote> = {
  en: {
    text:
      "The principal sources of knowledge are observation, experimentation, and inductive and deductive reasoning.",
    attribution: "Ramón y Cajal",
    sourceHref: baseHeroQuote.sourceHref
  },
  es: {
    text:
      "las principales fuentes de conocimiento son: la observación, la experimentación y el razonamiento inductivo y deductivo.",
    attribution: "Ramón y Cajal",
    sourceHref: baseHeroQuote.sourceHref
  }
};

const THEME_LABELS: Record<Language, Record<string, string>> = {
  en: {
    All: "All",
    "Stress & quiescence": "Stress & quiescence",
    "Cytoplasmic biophysics": "Cytoplasmic biophysics",
    "Genome regulation": "Genome regulation",
    "Chromatin dynamics": "Chromatin dynamics",
    "Imaging methods": "Imaging methods",
    "Stem cells": "Stem cells",
    "Optical biophotonics": "Optical biophotonics"
  },
  es: {
    All: "Todas",
    "Stress & quiescence": "Estrés y quiescencia",
    "Cytoplasmic biophysics": "Biofísica citoplasmática",
    "Genome regulation": "Regulación genómica",
    "Chromatin dynamics": "Dinámica de la cromatina",
    "Imaging methods": "Métodos de imagen",
    "Stem cells": "Células madre",
    "Optical biophotonics": "Biofotónica óptica"
  }
};

const CONTACT_LABELS_ES: Record<string, string> = {
  Email: "Correo",
  GitHub: "GitHub",
  Scholar: "Scholar",
  Slowball: "Slowball"
};

const SECTION_LINK_LABELS_ES: Record<string, string> = {
  research: "Scholar",
  software: "GitHub",
  slowball: "slowball.ch"
};

const ITEM_OVERRIDES_ES: Record<string, Partial<GalleryItem>> = {
  "research::The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence":
    {
      note:
        "Muestra cómo la respuesta al estrés ambiental reorganiza las propiedades materiales del citoplasma para proteger a las células en quiescencia."
    },
  "research::Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress":
    {
      note:
        "Conecta el momento de la transcripción con la traducción selectiva durante el estrés agudo para explicar cómo las células priorizan nueva expresión génica."
    },
  "research::Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm":
    {
      note:
        "Demuestra que el ARNm cargado con ribosomas es un determinante principal del comportamiento físico del citoplasma eucariota."
    },
  "research::SMARCAD1 and TOPBP1 contribute to heterochromatin maintenance at the transition from the 2C-like to the pluripotent state":
    {
      note:
        "Identifica a SMARCAD1 y TOPBP1 como reguladores del restablecimiento de la heterocromatina en la transición desde células tipo 2C de vuelta a la pluripotencia."
    },
  "research::The relationship between nanoscale genome organization and gene expression in mouse embryonic stem cells during pluripotency transition":
    {
      note:
        "Relaciona la remodelación genómica a nanoescala con cambios en la expresión génica durante la transición de estados ingenuos a primed en células madre."
    },
  "research::Transcription-mediated supercoiling regulates genome folding and loop formation":
    {
      note:
        "Muestra que el superenrollamiento generado por la transcripción contribuye directamente a la formación de bucles y al plegamiento del genoma a gran escala."
    },
  "research::Distinct properties and functions of CTCF revealed by a rapidly inducible degron system":
    {
      note:
        "Usa un sistema degron inducible para revelar que distintos sitios de CTCF difieren en residencia cromatínica, fuerza de frontera y funciones transcripcionales."
    },
  "research::Mesoscale Modeling and Single-Nucleosome Tracking Reveal Remodeling of Clutch Folding and Dynamics in Stem Cell Differentiation":
    {
      note:
        "Combina modelado y seguimiento de nucleosomas individuales para mostrar cómo se remodela la organización de clutches durante la diferenciación de células madre."
    },
  "research::Two-parameter single-molecule analysis for measurement of chromatin mobility":
    {
      note:
        "Ofrece un flujo de trabajo práctico para cuantificar la movilidad de la cromatina mediante seguimiento de moléculas individuales en células vivas."
    },
  "research::Two-parameter mobility assessments discriminate diverse regulatory factor behaviors in chromatin":
    {
      note:
        "Introduce un marco de movilidad de dos parámetros que separa cómo las proteínas reguladoras buscan, se unen y se comportan sobre la cromatina."
    },
  "research::Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo":
    {
      note:
        "Mide cómo la acetilación de histonas cambia la compactación del ADN nucleosomal directamente dentro de células vivas con microscopía de superresolución."
    },
  "research::Excitation-multiplexed multicolor superresolution imaging with fm-STORM and fm-DNA-PAINT":
    {
      note:
        "Desarrolla un enfoque de superresolución multiplexado que acelera la imagen multicolor sin sacrificar campo de visión."
    },
  "research::(Po)STAC (Polycistronic SunTAg modified CRISPR) enables live-cell and fixed-cell super-resolution imaging of multiple genes":
    {
      note:
        "Introduce una estrategia CRISPR-SunTag para imagen multigénica de superresolución en células vivas y fijadas."
    },
  "research::Photophysical and photobiological properties of the redaporfin photosensitizer":
    {
      note:
        "Caracteriza el comportamiento fotofísico y biológico de redaporfina para respaldar su uso en terapia fotodinámica."
    },
  "software::CellRaQ": {
    badge: "Repositorio",
    meta: "Análisis científico de imagen"
  },
  "software::Single-Molecule-Tracking-Analysis": {
    badge: "Repositorio",
    meta: "Análisis de seguimiento"
  },
  "software::Two-Parameter-SMT": {
    badge: "Repositorio",
    meta: "Movilidad de la cromatina"
  },
  "software::Excitation-multiplexed multicolor super-resolution imaging": {
    badge: "Repositorio",
    meta: "Superresolución multicolor"
  },
  "software::SLOWBALL": {
    badge: "Repositorio",
    meta: "Seguimiento y capital"
  },
  "software::Personal Lab": {
    meta: "En desarrollo"
  },
  "software::Capital Lab": {
    meta: "En desarrollo"
  },
  "software::Decision surfaces": {
    badge: "Sistema",
    meta: "Herramientas de decisión",
    title: "Superficies de decisión"
  },
  "literature::La Bacanora": {
    badge: "Novela",
    meta: "Ficción de largo aliento"
  },
  "literature::Short fiction": {
    badge: "Ficción",
    meta: "Relatos",
    title: "Relatos"
  },
  "literature::O jardim de Yvonne Mascarenhas": {
    badge: "Ensayo"
  },
  "literature::Reuniao plenaria da Pontificia Academia das Ciencias do Vaticano":
    {
      badge: "Ensayo"
    },
  "literature::Articles and notebooks": {
    badge: "Notas",
    meta: "Ensayos y reflexiones",
    title: "Artículos y cuadernos"
  },
  "innovation::Multi-color imaging": {
    badge: "Patente",
    meta: "US Patent 11,287,628 B2 · Concedida en 2022",
    note:
      "Imagen multicolor modulada en frecuencia para adquisiciones de fluorescencia y superresolución más rápidas con configuraciones ópticas más simples."
  },
  "innovation::Portable reflectance and fluorescence microendoscope for smartphones":
    {
      badge: "Patente",
      meta: "BR 10 2015 026020 2 B1 · Concedida",
      note:
        "Microendoscopio portátil de reflectancia y fluorescencia acoplable a smartphones para imagen biomédica y aplicaciones point-of-care."
    },
  "innovation::Technical diligence": {
    badge: "Servicio",
    meta: "Evaluación deep-tech",
    title: "Due diligence técnico"
  },
  "innovation::R&D and product evaluation": {
    badge: "Servicio",
    meta: "Microscopía, software e instrumentación",
    title: "Evaluación de I+D y producto"
  },
  "innovation::Technology strategy and communication": {
    badge: "Servicio",
    meta: "Ciencia traducida en decisiones",
    title: "Estrategia tecnológica y comunicación"
  },
  "teaching::Scientific Concepts and Methods": {
    meta: "ETH Zurich · clase de máster",
    note:
      "Clase de cuatro horas para estudiantes de máster de Farmacia, Biología, Biotecnología y Ciencias Traslacionales."
  },
  "teaching::Advanced microscopy techniques for biology": {
    meta: "ETH Zurich · clase de grado",
    note:
      "Clase sobre métodos ópticos y microscopía moderna para estudiantes de grado."
  },
  "teaching::Cell dynamics and anomalous diffusion": {
    meta: "ETH Zurich · clase de grado",
    note:
      "Clase breve sobre dinámica celular cuantitativa y transporte no browniano."
  },
  "teaching::Molecular and cell biology tools": {
    meta: "ETH Zurich · docencia práctica",
    note:
      "Impartí cursos prácticos Grundlagen para estudiantes de grado durante aproximadamente 50 horas docentes."
  },
  "teaching::Cell-iSCAT semester project": {
    meta: "ETH Zurich · supervisión",
    note:
      "Supervisé un proyecto de máster sobre la cuantificación de la dinámica del crowding macromolecular en células vivas individuales."
  },
  "teaching::Tools for probing living cells and image analysis methods": {
    meta: "ETH Zurich · curso intensivo",
    note:
      "Docencia práctica de cuatro semanas en métodos de célula viva y análisis de imagen para estudiantes de grado."
  }
};

function localizeItems(sectionId: string, items: GalleryItem[], language: Language) {
  if (language === "en") {
    return items;
  }

  return items.map((item) => ({
    ...item,
    ...ITEM_OVERRIDES_ES[`${sectionId}::${item.title}`]
  }));
}

export function getInterfaceCopy(language: Language) {
  return INTERFACE_COPY[language];
}

export function getHeroQuote(language: Language) {
  return QUOTES[language];
}

export function getThemeLabel(language: Language, theme: string) {
  return THEME_LABELS[language][theme] ?? theme;
}

export function getLocalizedSectionNavLinks(language: Language): SectionLink[] {
  return [
    { label: SECTION_LABELS[language].research, href: "#research" },
    { label: SECTION_LABELS[language].software, href: "#software" },
    { label: SECTION_LABELS[language].slowball, href: "#slowball" },
    { label: SECTION_LABELS[language].literature, href: "#literature" },
    { label: SECTION_LABELS[language].innovation, href: "#innovation" },
    { label: SECTION_LABELS[language].teaching, href: "#teaching" },
    { label: SECTION_LABELS[language].contact, href: "#contact" }
  ];
}

export function getLocalizedContactLinks(language: Language): ContactLink[] {
  if (language === "en") {
    return baseContactLinks;
  }

  return baseContactLinks.map((link) => ({
    ...link,
    label: CONTACT_LABELS_ES[link.label] ?? link.label
  }));
}

export function getLocalizedGallerySections(language: Language): GallerySection[] {
  return baseGallerySections.map((section) => ({
    ...section,
    label: SECTION_LABELS[language][section.id] ?? section.label,
    linkLabel:
      language === "es"
        ? SECTION_LINK_LABELS_ES[section.id] ?? section.linkLabel
        : section.linkLabel,
    items: localizeItems(section.id, section.items, language)
  }));
}
