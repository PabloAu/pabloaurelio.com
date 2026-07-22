export type SectionLink = {
  label: string;
  href: string;
};

export type HeroMarker = {
  label: string;
  href: string;
  x: number;
  y: number;
  tone: string;
};

export type GalleryItem = {
  title: string;
  meta: string;
  badge: string;
  href: string;
  note?: string;
  featured?: boolean;
};

export type GallerySection = {
  id: string;
  label: string;
  linkLabel?: string;
  linkHref?: string;
  layout: "landscape" | "portrait";
  background: string;
  overlay: string;
  cardFrom: string;
  cardTo: string;
  ink: string;
  muted: string;
  accent: string;
  items: GalleryItem[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const topLinks: SectionLink[] = [
  { label: "CV", href: "/documents/pablo-aurelio-resume.pdf" },
  {
    label: "Scholar",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  { label: "GitHub", href: "https://github.com/PabloAu" },
  { label: "Contact", href: "#contact" }
];

export const sectionNavLinks: SectionLink[] = [
  { label: "Research", href: "#research" },
  { label: "Software", href: "#software" },
  { label: "Apps", href: "#apps" },
  { label: "Investing", href: "#slowball" },
  { label: "Writing", href: "#writing" },
  { label: "Library", href: "#library" },
  { label: "Consulting", href: "#consulting" },
  { label: "Contact", href: "#contact" }
];

export const heroMarkers: HeroMarker[] = [
  {
    label: "Software",
    href: "#software",
    x: 12,
    y: 53,
    tone: "#8faed0"
  },
  {
    label: "Library",
    href: "#library",
    x: 59,
    y: 15,
    tone: "#a8cec2"
  },
  {
    label: "Research",
    href: "#research",
    x: 39,
    y: 46,
    tone: "#d9c38d"
  },
  {
    label: "Apps",
    href: "#apps",
    x: 24,
    y: 60,
    tone: "#b8d7c9"
  },
  {
    label: "Consulting",
    href: "#consulting",
    x: 87,
    y: 31,
    tone: "#c8b8df"
  },
  {
    label: "Writing",
    href: "#writing",
    x: 18,
    y: 66,
    tone: "#97b8df"
  },
  {
    label: "Investing\neducation",
    href: "#slowball",
    x: 90,
    y: 84,
    tone: "#ddd5a2"
  }
];

export const gallerySections: GallerySection[] = [
  {
    id: "research",
    label: "Research",
    linkLabel: "Scholar",
    linkHref: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(245, 239, 229, 1) 0%, rgba(231, 223, 209, 1) 100%)",
    overlay:
      "radial-gradient(circle at 14% 12%, rgba(192, 179, 149, 0.22), transparent 28%), radial-gradient(circle at 84% 18%, rgba(151, 175, 158, 0.18), transparent 22%)",
    cardFrom: "#d5ccb9",
    cardTo: "#eee5d3",
    ink: "#2f2419",
    muted: "#675847",
    accent: "#7a6b53",
    items: [
      {
        badge: "2026",
        meta: "Journal of Cell Biology",
        title:
          "The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es",
        featured: true
      },
      {
        badge: "2025",
        meta: "Molecular Cell",
        title:
          "Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        badge: "2025",
        meta: "Cell Reports",
        title:
          "Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        badge: "2019",
        meta: "Nucleic Acids Research",
        title:
          "Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6895258/"
      }
    ]
  },
  {
    id: "software",
    label: "Software",
    linkLabel: "GitHub",
    linkHref: "https://github.com/PabloAu",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(31, 26, 22, 1) 0%, rgba(18, 15, 13, 1) 100%)",
    overlay:
      "radial-gradient(circle at 12% 22%, rgba(199, 158, 77, 0.18), transparent 26%), radial-gradient(circle at 86% 18%, rgba(139, 108, 64, 0.14), transparent 26%)",
    cardFrom: "#453421",
    cardTo: "#201913",
    ink: "#f0e3c5",
    muted: "#cdbd9b",
    accent: "#e4c17d",
    items: [
      {
        badge: "Repo",
        meta: "Scientific tooling",
        title: "CellRaQ",
        href: "https://github.com/PabloAu/CellRaQ",
        featured: true
      },
      {
        badge: "Repo",
        meta: "Tracking analysis",
        title: "Single-Molecule-Tracking-Analysis",
        href: "https://github.com/PabloAu/Single-Molecule-Tracking-Analysis"
      },
      {
        badge: "Repo",
        meta: "Chromatin mobility",
        title: "Two-Parameter-SMT",
        href: "https://github.com/PabloAu/Two-Parameter-SMT"
      },
      {
        badge: "Tool",
        meta: "Portfolio software",
        title: "SlowballTracker",
        href: "#slowball"
      }
    ]
  },
  {
    id: "apps",
    label: "Apps",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(239, 228, 222, 1) 0%, rgba(228, 213, 205, 1) 100%)",
    overlay:
      "radial-gradient(circle at 18% 14%, rgba(181, 144, 121, 0.18), transparent 28%), radial-gradient(circle at 86% 32%, rgba(209, 175, 154, 0.14), transparent 24%)",
    cardFrom: "#ccb8aa",
    cardTo: "#efe3da",
    ink: "#34261c",
    muted: "#6f5a4f",
    accent: "#9d7d67",
    items: [
      {
        badge: "App",
        meta: "Knowledge and decisions",
        title: "Personal Lab",
        href: "#contact",
        featured: true
      },
      {
        badge: "App",
        meta: "Research and capital",
        title: "Capital Lab",
        href: "#contact"
      },
      {
        badge: "Prototype",
        meta: "Interface language",
        title: "Decision surfaces",
        href: "#contact"
      }
    ]
  },
  {
    id: "slowball",
    label: "Slowball",
    linkLabel: "slowball.ch",
    linkHref: "https://slowball.ch",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(58, 49, 31, 1) 0%, rgba(34, 29, 20, 1) 100%)",
    overlay:
      "radial-gradient(circle at 16% 18%, rgba(191, 153, 73, 0.18), transparent 26%), radial-gradient(circle at 82% 20%, rgba(114, 96, 58, 0.18), transparent 28%)",
    cardFrom: "#6f5a31",
    cardTo: "#2a2318",
    ink: "#f2e5c9",
    muted: "#cfbf9f",
    accent: "#d5b067",
    items: [
      {
        badge: "Site",
        meta: "Project",
        title: "slowball.ch",
        href: "https://slowball.ch",
        featured: true
      },
      {
        badge: "Tool",
        meta: "Tracking",
        title: "SlowballTracker",
        href: "#software"
      },
      {
        badge: "Notes",
        meta: "Capital and patience",
        title: "Slow capital writing",
        href: "#writing"
      }
    ]
  },
  {
    id: "writing",
    label: "Writing",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(238, 228, 229, 1) 0%, rgba(223, 209, 210, 1) 100%)",
    overlay:
      "radial-gradient(circle at 12% 14%, rgba(183, 127, 121, 0.18), transparent 26%), radial-gradient(circle at 84% 24%, rgba(167, 138, 132, 0.14), transparent 24%)",
    cardFrom: "#cbb6b3",
    cardTo: "#efe5e4",
    ink: "#34221e",
    muted: "#6d5550",
    accent: "#a07770",
    items: [
      {
        badge: "Novel",
        meta: "Featured work",
        title: "La Bacanora",
        href: "#contact",
        featured: true
      },
      {
        badge: "Fiction",
        meta: "Short stories",
        title: "Short fiction",
        href: "#contact"
      },
      {
        badge: "Essay",
        meta: "Articles and notes",
        title: "Essays",
        href: "#contact"
      },
      {
        badge: "Essays",
        meta: "Publication space",
        title: "Articles",
        href: "#contact"
      }
    ]
  },
  {
    id: "library",
    label: "Library",
    layout: "portrait",
    background:
      "linear-gradient(180deg, rgba(24, 20, 17, 1) 0%, rgba(15, 13, 11, 1) 100%)",
    overlay:
      "radial-gradient(circle at 14% 10%, rgba(171, 132, 66, 0.18), transparent 24%), radial-gradient(circle at 84% 18%, rgba(88, 74, 51, 0.22), transparent 28%)",
    cardFrom: "#604833",
    cardTo: "#221a14",
    ink: "#f4e7cb",
    muted: "#d4c3a1",
    accent: "#e2bf76",
    items: [
      {
        badge: "Book",
        meta: "Santiago Ramon y Cajal",
        title: "Advice for a Young Investigator",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "D'Arcy Wentworth Thompson",
        title: "On Growth and Form",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Thomas S. Kuhn",
        title: "The Structure of Scientific Revolutions",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Douglas Hofstadter",
        title: "Godel, Escher, Bach",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "David Deutsch",
        title: "The Beginning of Infinity",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Charlie Munger",
        title: "Poor Charlie's Almanack",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Jorge Luis Borges",
        title: "Ficciones",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Roberto Bolano",
        title: "The Savage Detectives",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "W. G. Sebald",
        title: "The Rings of Saturn",
        href: "#library"
      },
      {
        badge: "Book",
        meta: "Primo Levi",
        title: "The Periodic Table",
        href: "#library"
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(236, 232, 224, 1) 0%, rgba(219, 214, 205, 1) 100%)",
    overlay:
      "radial-gradient(circle at 16% 12%, rgba(160, 152, 133, 0.16), transparent 24%), radial-gradient(circle at 86% 18%, rgba(130, 122, 106, 0.16), transparent 28%)",
    cardFrom: "#c9c1b4",
    cardTo: "#ede7dc",
    ink: "#30261f",
    muted: "#66594d",
    accent: "#86745f",
    items: [
      {
        badge: "Work",
        meta: "Technical review",
        title: "Technical diligence",
        href: "#contact",
        featured: true
      },
      {
        badge: "Work",
        meta: "Scientific assessment",
        title: "Research review",
        href: "#contact"
      },
      {
        badge: "Work",
        meta: "Product and systems",
        title: "Product evaluation",
        href: "#contact"
      },
      {
        badge: "Work",
        meta: "Imaging and data",
        title: "Workflow analysis",
        href: "#contact"
      }
    ]
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "pablo.gomez@icfo.eu",
    href: "mailto:pablo.gomez@icfo.eu"
  },
  {
    label: "GitHub",
    value: "PabloAu",
    href: "https://github.com/PabloAu"
  },
  {
    label: "Scholar",
    value: "Google Scholar",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    label: "Slowball",
    value: "slowball.ch",
    href: "https://slowball.ch"
  }
];
