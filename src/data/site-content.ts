export type SectionLink = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type HeroMarker = {
  label: string;
  detail: string;
  href: string;
  x: number;
  y: number;
  tone: string;
};

export type PracticeAction = {
  label: string;
  href: string;
};

export type PracticeSection = {
  id: string;
  label: string;
  title: string;
  summary: string;
  body: string;
  highlights: string[];
  actions: PracticeAction[];
  tint: string;
};

export type ReadingEntry = {
  title: string;
  creator: string;
  kind: string;
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

export const heroMarkers: HeroMarker[] = [
  {
    label: "Software",
    detail: "Old computer",
    href: "#software",
    x: 12,
    y: 31,
    tone: "#dcb873"
  },
  {
    label: "Marginalia",
    detail: "Library",
    href: "#marginalia",
    x: 50,
    y: 17,
    tone: "#f2d8a1"
  },
  {
    label: "Research",
    detail: "Microscope",
    href: "#research",
    x: 40,
    y: 43,
    tone: "#d7c38a"
  },
  {
    label: "Apps",
    detail: "Instrument case",
    href: "#apps",
    x: 26,
    y: 48,
    tone: "#cda06f"
  },
  {
    label: "Consulting",
    detail: "The study",
    href: "#consulting",
    x: 78,
    y: 34,
    tone: "#e1c48d"
  },
  {
    label: "Writing",
    detail: "Volumes",
    href: "#writing",
    x: 76,
    y: 16,
    tone: "#b98773"
  },
  {
    label: "Slowball",
    detail: "Side table",
    href: "#slowball",
    x: 89,
    y: 78,
    tone: "#af8d4f"
  }
];

export const practiceSections: PracticeSection[] = [
  {
    id: "research",
    label: "Research",
    title: "Microscopy, biophysics, and quantitative cell biology.",
    summary:
      "The scientific branch is grounded in microscopy, chromatin, cytoplasm, and careful quantitative reasoning.",
    body:
      "This section should feel exact and quiet. It is where papers, methods, and the more durable part of your scientific identity live.",
    highlights: [
      "Google Scholar as the public research archive",
      "A strong visual anchor in microscopy and imaging",
      "A bridge between experiments, data, and interpretation"
    ],
    actions: [
      {
        label: "Open Scholar profile",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        label: "See the 2019 nucleosome paper",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6895258/"
      }
    ],
    tint: "rgba(140, 126, 87, 0.2)"
  },
  {
    id: "software",
    label: "Software",
    title: "Analytical tools, code, and experimental systems.",
    summary:
      "Code appears here as a working craft: scientific tooling, analysis pipelines, internal systems, and product-oriented builds.",
    body:
      "Instead of feeling like a repository dump, this section should read as software in the service of understanding, judgment, and durable systems.",
    highlights: [
      "Public repositories on GitHub",
      "Scientific analysis and workflow tooling",
      "Product-minded implementation for real use"
    ],
    actions: [
      { label: "Open GitHub", href: "https://github.com/PabloAu" },
      {
        label: "Single-Molecule-Tracking-Analysis",
        href: "https://github.com/PabloAu/Single-Molecule-Tracking-Analysis"
      }
    ],
    tint: "rgba(111, 103, 84, 0.18)"
  },
  {
    id: "apps",
    label: "Apps",
    title: "Personal Lab and Capital Lab as living tools.",
    summary:
      "The apps should feel less like demos and more like private rooms for decisions, memory, research, and long-horizon thinking.",
    body:
      "This branch is where the site can eventually open into interactive systems. For now it should already suggest a product language with restraint and intent.",
    highlights: [
      "Personal Lab for thought, memory, and operating principles",
      "Capital Lab for portfolio research and allocation work",
      "A cleaner interface language than a conventional dashboard"
    ],
    actions: [
      { label: "Discuss the app direction", href: "#contact" },
      { label: "Open GitHub context", href: "https://github.com/PabloAu" }
    ],
    tint: "rgba(145, 109, 84, 0.18)"
  },
  {
    id: "slowball",
    label: "Slowball",
    title: "Capital, patience, and long-horizon systems.",
    summary:
      "Slowball belongs here as a quiet capital branch rather than as a finance page. It should feel deliberate, sparse, and patient.",
    body:
      "The project connects philosophy, tracking tools, essays, and the more practical side of capital allocation without losing its tone.",
    highlights: [
      "Slowball as philosophy and method",
      "Tracker work and portfolio software",
      "A bridge between writing, systems, and capital"
    ],
    actions: [
      { label: "Visit Slowball", href: "https://slowball.ch/man" },
      { label: "Write about capital systems", href: "#contact" }
    ],
    tint: "rgba(159, 126, 62, 0.2)"
  },
  {
    id: "writing",
    label: "Writing",
    title: "Novels, essays, short stories, and authored work.",
    summary:
      "This is the literary room: La Bacanora, shorter fiction, essays, and any future publication track that should not be hidden under the technical work.",
    body:
      "The tone here should be calmer and more spacious. It is where your written voice can stand on its own rather than living as an appendix to the rest.",
    highlights: [
      "La Bacanora as a featured novel project",
      "A home for short fiction and reflective essays",
      "Room for publication notes and excerpts later on"
    ],
    actions: [
      { label: "Reserve space for La Bacanora", href: "#contact" },
      { label: "Open the reading shelf", href: "#marginalia" }
    ],
    tint: "rgba(128, 92, 87, 0.18)"
  },
  {
    id: "consulting",
    label: "Consulting",
    title: "Technical diligence and structured analytical support.",
    summary:
      "The consulting branch should feel trustworthy and exact: science, software, methods, and careful technical judgment.",
    body:
      "This is the place for diligence work, review, and synthesis. It should communicate rigor and usefulness without sounding like generic advisory language.",
    highlights: [
      "Scientific and technical review",
      "Software and product diligence",
      "Decision support with a careful evidentiary style"
    ],
    actions: [
      { label: "Start a conversation", href: "#contact" },
      { label: "Download the short CV", href: "/documents/pablo-aurelio-resume.pdf" }
    ],
    tint: "rgba(107, 100, 81, 0.18)"
  }
];

export const resumePoints: string[] = [
  "Research spanning microscopy, biophysics, quantitative analysis, and experimental design.",
  "Software work across scientific tooling, decision systems, and product direction.",
  "Writing across fiction, essays, and scientific communication.",
  "Analytical consulting for technical diligence, product evaluation, and structured judgment."
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
    value: "Google Scholar profile",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    label: "Slowball",
    value: "slowball.ch/man",
    href: "https://slowball.ch/man"
  }
];

export const readingRoom: ReadingEntry[] = [
  {
    title: "Advice for a Young Investigator",
    creator: "Santiago Ramon y Cajal",
    kind: "Science",
    href: "#marginalia"
  },
  {
    title: "On Growth and Form",
    creator: "D'Arcy Wentworth Thompson",
    kind: "Science",
    href: "#marginalia"
  },
  {
    title: "The Structure of Scientific Revolutions",
    creator: "Thomas S. Kuhn",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "The Double Helix",
    creator: "James D. Watson",
    kind: "Science",
    href: "#marginalia"
  },
  {
    title: "Godel, Escher, Bach",
    creator: "Douglas Hofstadter",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "The Beginning of Infinity",
    creator: "David Deutsch",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "Poor Charlie's Almanack",
    creator: "Charlie Munger",
    kind: "Capital",
    href: "#marginalia"
  },
  {
    title: "The Intelligent Investor",
    creator: "Benjamin Graham",
    kind: "Capital",
    href: "#marginalia"
  },
  {
    title: "The Black Swan",
    creator: "Nassim Nicholas Taleb",
    kind: "Capital",
    href: "#marginalia"
  },
  {
    title: "Ficciones",
    creator: "Jorge Luis Borges",
    kind: "Literature",
    href: "#marginalia"
  },
  {
    title: "The Savage Detectives",
    creator: "Roberto Bolano",
    kind: "Literature",
    href: "#marginalia"
  },
  {
    title: "Invisible Cities",
    creator: "Italo Calvino",
    kind: "Literature",
    href: "#marginalia"
  },
  {
    title: "Essays",
    creator: "Michel de Montaigne",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "The Rings of Saturn",
    creator: "W. G. Sebald",
    kind: "Literature",
    href: "#marginalia"
  },
  {
    title: "The Periodic Table",
    creator: "Primo Levi",
    kind: "Literature",
    href: "#marginalia"
  },
  {
    title: "Lab Girl",
    creator: "Hope Jahren",
    kind: "Science",
    href: "#marginalia"
  },
  {
    title: "Meditations",
    creator: "Marcus Aurelius",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "The Craft of Research",
    creator: "Wayne C. Booth, Gregory G. Colomb, and Joseph M. Williams",
    kind: "Essay",
    href: "#marginalia"
  },
  {
    title: "The Selfish Gene",
    creator: "Richard Dawkins",
    kind: "Science",
    href: "#marginalia"
  },
  {
    title: "Mimesis",
    creator: "Erich Auerbach",
    kind: "Literature",
    href: "#marginalia"
  }
];
