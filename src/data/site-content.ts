export type SectionLink = {
  label: string;
  href: string;
};

export type FocusArea = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
};

export type FeaturedItem = {
  title: string;
  category: string;
  year: string;
  blurb: string;
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

export const navLinks: SectionLink[] = [
  { label: "Research", href: "#research" },
  { label: "Software", href: "#software" },
  { label: "Apps", href: "#apps" },
  { label: "Slowball", href: "#slowball" },
  { label: "Writing", href: "#writing" },
  { label: "Consulting", href: "#consulting" },
  { label: "Resume", href: "#resume" },
  { label: "Reading Room", href: "#reading-room" }
];

export const focusAreas: FocusArea[] = [
  {
    eyebrow: "Science",
    title: "Microscopy, biophysics, and quantitative biology",
    description:
      "A research practice spanning super-resolution microscopy, image analysis, data-heavy biology, and cellular biophysics.",
    href: "#research"
  },
  {
    eyebrow: "Software",
    title: "Tools, pipelines, and analytical systems",
    description:
      "From imaging libraries to decision-support products, the software work connects experimentation with execution.",
    href: "#software"
  },
  {
    eyebrow: "Writing",
    title: "Novels, essays, short fiction, and scientific communication",
    description:
      "A parallel literary branch with room for fiction, essays, long-form thinking, and public-facing scientific writing.",
    href: "#writing"
  }
];

export const featuredItems: FeaturedItem[] = [
  {
    category: "Research",
    year: "2026",
    title: "Cell-iSCAT",
    blurb:
      "A new imaging method focused on intracellular dynamics with high spatiotemporal resolution.",
    href: "#research"
  },
  {
    category: "App",
    year: "In development",
    title: "Personal Lab",
    blurb:
      "A decision-making environment for structuring thought, evidence, and personal systems.",
    href: "#apps"
  },
  {
    category: "App",
    year: "In development",
    title: "Capital Lab",
    blurb:
      "A product direction for portfolio thinking, capital allocation, and analytical workflows.",
    href: "#apps"
  },
  {
    category: "Writing",
    year: "Current",
    title: "La Bacanora",
    blurb:
      "A dedicated literary space for the novel alongside short stories, essays, and future publication paths.",
    href: "#writing"
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
    status: "Public repo",
    blurb: "Cellular RNA quantification tooling.",
    href: "https://github.com/PabloAu/CellRaQ"
  },
  {
    title: "Single-Molecule-Tracking-Analysis",
    status: "Public repo",
    blurb: "Analysis workflows for single-molecule tracking experiments.",
    href: "https://github.com/PabloAu/Single-Molecule-Tracking-Analysis"
  },
  {
    title: "Two-Parameter-SMT",
    status: "Public repo",
    blurb:
      "Chromatin and transcription-factor mobility assessment from single-molecule tracking.",
    href: "https://github.com/PabloAu/Two-Parameter-SMT"
  },
  {
    title: "SlowballTracker",
    status: "Portfolio tool",
    blurb:
      "A dedicated space for portfolio tracking tools and Slowball-adjacent software.",
    href: "#slowball"
  }
];

export const apps: ProjectCard[] = [
  {
    title: "Personal Lab",
    status: "In development",
    blurb:
      "A system for organizing decisions, knowledge, and lived experiments with clarity.",
    href: "#apps"
  },
  {
    title: "Capital Lab",
    status: "In development",
    blurb:
      "A structured environment for capital allocation, investment research, and judgment.",
    href: "#apps"
  }
];

export const writingProjects: ProjectCard[] = [
  {
    title: "La Bacanora",
    status: "Novel",
    blurb:
      "A featured literary project with room for publication updates and excerpts later on.",
    href: "#writing"
  },
  {
    title: "Short Stories",
    status: "Collection",
    blurb:
      "A quieter branch for fiction work that can grow as pieces are selected and published.",
    href: "#writing"
  },
  {
    title: "Essays and Articles",
    status: "Ongoing",
    blurb:
      "A place for reflective long-form writing, public-facing science pieces, and analytical essays.",
    href: "#writing"
  }
];

export const readingRoom: ReadingEntry[] = [
  { title: "To Curate", creator: "Book or article 01", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 02", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 03", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 04", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 05", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 06", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 07", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 08", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 09", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 10", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 11", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 12", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 13", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 14", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 15", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 16", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 17", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 18", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 19", kind: "Placeholder", href: "#" },
  { title: "To Curate", creator: "Book or article 20", kind: "Placeholder", href: "#" }
];
