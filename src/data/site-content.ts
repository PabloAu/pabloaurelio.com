export type SectionLink = {
  label: string;
  href: string;
};

export type DisciplineTrack = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type Publication = {
  title: string;
  journal: string;
  year: string;
  href: string;
};

export type ProjectCard = {
  title: string;
  status: string;
  blurb: string;
  href: string;
};

export type ReadingEntry = {
  title: string;
  creator: string;
  kind: string;
  href: string;
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
  { label: "GitHub", href: "https://github.com/PabloAu" }
];

export const navLinks: SectionLink[] = [
  { label: "Research", href: "#research" },
  { label: "Software", href: "#software" },
  { label: "Writing", href: "#writing" },
  { label: "Marginalia", href: "#marginalia" },
  { label: "Contact", href: "#contact" }
];

export const introParagraphs: string[] = [
  "I work across microscopy and biophysics, scientific software, decision tools, fiction, essays, and long-horizon capital work. This site is meant to hold those branches together without making them feel fragmented.",
  "The scientific branch gathers publications, image-led thinking, and method-heavy work. The build branch gathers repositories, analytical tooling, product experiments, and the systems around Personal Lab, Capital Lab, and Slowball.",
  "Alongside that are slower projects: novels, short stories, essays, technical diligence, and a personal reading shelf that will become a compact catalogue of books, articles, and papers worth returning to."
];

export const disciplineTracks: DisciplineTrack[] = [
  {
    eyebrow: "Research",
    title: "Microscopy, biophysics, and quantitative biology",
    description:
      "Publications, imaging methods, and data-heavy biological work organized as a deliberate scientific branch.",
    href: "#research"
  },
  {
    eyebrow: "Software",
    title: "Analytical tools, libraries, and experimental systems",
    description:
      "A software branch connecting open-source tooling, internal research workflows, and product-grade analytical systems.",
    href: "#software"
  },
  {
    eyebrow: "Apps",
    title: "Personal Lab and Capital Lab",
    description:
      "Decision-making environments built around clarity, evidence, judgment, and long-horizon thinking.",
    href: "#software"
  },
  {
    eyebrow: "Writing",
    title: "Novels, essays, short fiction, and scientific communication",
    description:
      "A quieter literary space for La Bacanora, essays, articles, and future publication work.",
    href: "#writing"
  },
  {
    eyebrow: "Slowball",
    title: "Long-horizon investing and portfolio tooling",
    description:
      "The Slowball project, tracker work, and the financial branch that links product, research, and writing.",
    href: "#software"
  },
  {
    eyebrow: "Consulting",
    title: "Technical diligence and analytical support",
    description:
      "Scientific, software, and product-oriented diligence work presented with directness and trust.",
    href: "#contact"
  }
];

export const publications: Publication[] = [
  {
    title:
      "The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence",
    journal: "Journal of Cell Biology",
    year: "2026",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    title:
      "Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress",
    journal: "Molecular Cell",
    year: "2025",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    title:
      "Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm",
    journal: "Cell Reports",
    year: "2025",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    title:
      "Nanoscale organization of the genome at pluripotency genes regulates gene expression in mouse embryonic stem cells undergoing pluripotency transition",
    journal: "Nucleic Acids Research",
    year: "2024",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  {
    title:
      "Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo",
    journal: "Nucleic Acids Research",
    year: "2019",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6895258/"
  },
  {
    title:
      "Excitation-multiplexed multicolor superresolution imaging with fm-STORM and fm-DNA-PAINT",
    journal: "PNAS",
    year: "2018",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6304964/"
  }
];

export const softwareProjects: ProjectCard[] = [
  {
    title: "CellRaQ",
    status: "Public repository",
    blurb: "Cellular RNA quantification tooling for experimental workflows.",
    href: "https://github.com/PabloAu/CellRaQ"
  },
  {
    title: "Single-Molecule-Tracking-Analysis",
    status: "Public repository",
    blurb:
      "Analysis workflows for single-molecule tracking experiments and motion inference.",
    href: "https://github.com/PabloAu/Single-Molecule-Tracking-Analysis"
  },
  {
    title: "Two-Parameter-SMT",
    status: "Public repository",
    blurb:
      "Single-molecule tracking work focused on chromatin and transcription-factor mobility.",
    href: "https://github.com/PabloAu/Two-Parameter-SMT"
  },
  {
    title: "SlowballTracker",
    status: "Portfolio tool",
    blurb:
      "A dedicated home for portfolio tracking work and Slowball-adjacent analytical software.",
    href: "#software"
  }
];

export const apps: ProjectCard[] = [
  {
    title: "Personal Lab",
    status: "In development",
    blurb:
      "A system for structuring decisions, knowledge, experiments, and personal operating principles.",
    href: "#software"
  },
  {
    title: "Capital Lab",
    status: "In development",
    blurb:
      "A product direction for portfolio research, capital allocation, and long-horizon judgment.",
    href: "#software"
  }
];

export const writingProjects: ProjectCard[] = [
  {
    title: "La Bacanora",
    status: "Novel",
    blurb:
      "A featured literary project with room for publication updates, excerpts, and supporting essays.",
    href: "#writing"
  },
  {
    title: "Short Stories",
    status: "Fiction",
    blurb:
      "A branch for shorter narrative work, quieter pieces, and future published selections.",
    href: "#writing"
  },
  {
    title: "Essays and Articles",
    status: "Ongoing",
    blurb:
      "Long-form essays, analytical articles, and public-facing scientific writing.",
    href: "#writing"
  }
];

export const resumePoints: string[] = [
  "Research spanning microscopy, biophysics, quantitative analysis, and experimental design.",
  "Software practice covering scientific tooling, decision systems, and product direction.",
  "Writing practice across fiction, essays, and scientific communication.",
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
    label: "CV",
    value: "Short public resume",
    href: "/documents/pablo-aurelio-resume.pdf"
  }
];

const shelfKinds = [
  "Science",
  "Essay",
  "Literature",
  "Capital",
  "Research"
] as const;

export const readingRoom: ReadingEntry[] = Array.from({ length: 20 }, (_, index) => {
  const kind = shelfKinds[index % shelfKinds.length];
  const number = String(index + 1).padStart(2, "0");

  return {
    title: `Selection ${number}`,
    creator: `Curating ${kind.toLowerCase()} picks`,
    kind,
    href: "#marginalia"
  };
});
