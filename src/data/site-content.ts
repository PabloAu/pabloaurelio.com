export type SectionLink = {
  label: string;
  href: string;
};

export type GalleryItem = {
  title: string;
  meta: string;
  badge: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  note?: string;
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

export const heroQuote = {
  text:
    "Science may not yet know the final why of things, but through time it may come closer to the laws that govern matter, life, and thought.",
  attribution: "Santiago Ramon y Cajal",
  sourceLabel: "Reglas y consejos sobre investigacion cientifica",
  sourceHref: "https://gutenberg.org/files/66373/66373-h/66373-h.htm"
};

export const sectionNavLinks: SectionLink[] = [
  { label: "Research", href: "#research" },
  { label: "Software", href: "#software" },
  { label: "Investing", href: "#slowball" },
  { label: "Literature", href: "#literature" },
  { label: "Consulting", href: "#consulting" },
  { label: "Contact", href: "#contact" }
];

export const gallerySections: GallerySection[] = [
  {
    id: "research",
    label: "Research",
    linkLabel: "Scholar",
    linkHref: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(238, 230, 215, 1) 0%, rgba(228, 217, 196, 1) 100%)",
    overlay:
      "radial-gradient(circle at 12% 12%, rgba(135, 153, 170, 0.18), transparent 26%), radial-gradient(circle at 88% 18%, rgba(181, 155, 104, 0.16), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(45,34,23,0.02))",
    cardFrom: "#efe4d1",
    cardTo: "#cfc2aa",
    ink: "#241c16",
    muted: "#665748",
    accent: "#6d86a6",
    items: [
      {
        badge: "2026",
        meta: "Journal of Cell Biology",
        title:
          "The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence",
        href: "https://rupress.org/jcb/article/225/6/e202601119/281838/The-environmental-stress-response-regulates",
        imageSrc: "/images/research/jcb-cover.png",
        imageAlt: "Journal of Cell Biology cover",
        imageFit: "contain"
      },
      {
        badge: "2025",
        meta: "Molecular Cell",
        title:
          "Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress",
        href: "https://www.sciencedirect.com/science/article/pii/S1097276525009001",
        imageSrc: "/images/research/molecular-cell-cover.jpg",
        imageAlt: "Molecular Cell cover",
        imageFit: "contain"
      },
      {
        badge: "2025",
        meta: "Cell Reports",
        title:
          "Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm",
        href: "https://doi.org/10.1016/j.celrep.2025.116204",
        imageSrc: "/images/research/cell-reports-cover.jpg",
        imageAlt: "Cell Reports cover",
        imageFit: "contain"
      },
      {
        badge: "2021",
        meta: "Cell Reports",
        title:
          "Cell cycle entry is controlled by the translational reprogramming of quiescent G0 cells",
        href: "https://doi.org/10.1016/j.celrep.2020.108614",
        imageSrc: "/images/research/cell-reports-cover.jpg",
        imageAlt: "Cell Reports cover",
        imageFit: "contain"
      },
      {
        badge: "2020",
        meta: "Molecular Cell",
        title:
          "Single-nucleosome imaging reveals control of parental histone recycling by free histones during DNA replication",
        href: "https://doi.org/10.1016/j.molcel.2020.05.036",
        imageSrc: "/images/research/molecular-cell-cover.jpg",
        imageAlt: "Molecular Cell cover",
        imageFit: "contain"
      },
      {
        badge: "2019",
        meta: "Nucleic Acids Research",
        title:
          "Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo",
        href: "https://doi.org/10.1093/nar/gkz593",
        imageSrc: "/images/research/nar-cover-fallback.svg",
        imageAlt: "Nucleic Acids Research cover-inspired artwork",
        imageFit: "contain"
      },
      {
        badge: "2018",
        meta: "Proceedings of the National Academy of Sciences",
        title:
          "DNA compaction and repositioning induced by the formation of the 30-nm chromatin fiber",
        href: "https://doi.org/10.1073/pnas.1804725115",
        imageSrc: "/images/research/pnas-cover.jpg",
        imageAlt: "Proceedings of the National Academy of Sciences cover",
        imageFit: "contain"
      },
      {
        badge: "2018",
        meta: "Nucleic Acids Research",
        title:
          "PoSTAC: a tool for the analysis of DNA compaction by super-resolution microscopy",
        href: "https://doi.org/10.1093/nar/gkx1271",
        imageSrc: "/images/research/nar-cover-fallback.svg",
        imageAlt: "Nucleic Acids Research cover-inspired artwork",
        imageFit: "contain"
      },
      {
        badge: "2017",
        meta: "Photodiagnosis and Photodynamic Therapy",
        title:
          "Photophysical and photobiological properties of the redaporfin photosensitizer",
        href: "https://doi.org/10.1016/j.pdpdt.2017.04.012",
        imageSrc: "/images/research/pdpdt-cover-fallback.svg",
        imageAlt: "Photodiagnosis and Photodynamic Therapy cover-inspired artwork",
        imageFit: "contain"
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
      "linear-gradient(180deg, rgba(31, 24, 18, 1) 0%, rgba(18, 14, 11, 1) 100%)",
    overlay:
      "radial-gradient(circle at 14% 16%, rgba(109, 134, 166, 0.18), transparent 26%), radial-gradient(circle at 84% 18%, rgba(217, 183, 104, 0.14), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.08))",
    cardFrom: "#403223",
    cardTo: "#17120f",
    ink: "#f3e7cc",
    muted: "#ccbfa4",
    accent: "#d7b768",
    items: [
      {
        badge: "Repo",
        meta: "Scientific image analysis",
        title: "CellRaQ",
        href: "https://github.com/PabloAu/CellRaQ"
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
        badge: "Repo",
        meta: "Multicolor super-resolution",
        title:
          "Excitation-multiplexed multicolor super-resolution imaging",
        href: "https://github.com/PabloAu/Excitation-multiplexed-multicolor-super-resolution-imaging-with-fm-DNA-PAINT-and-fm-STORM"
      },
      {
        badge: "Repo",
        meta: "Tracking and capital",
        title: "SLOWBALL",
        href: "https://github.com/PabloAu/SLOWBALL"
      },
      {
        badge: "App",
        meta: "In development",
        title: "Personal Lab",
        href: "#contact"
      },
      {
        badge: "App",
        meta: "In development",
        title: "Capital Lab",
        href: "#contact"
      },
      {
        badge: "System",
        meta: "Decision tools",
        title: "Decision surfaces",
        href: "#contact"
      }
    ]
  },
  {
    id: "slowball",
    label: "Investing",
    linkLabel: "slowball.ch",
    linkHref: "https://slowball.ch",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(43, 35, 26, 1) 0%, rgba(26, 22, 17, 1) 100%)",
    overlay:
      "radial-gradient(circle at 18% 16%, rgba(207, 169, 91, 0.16), transparent 28%), radial-gradient(circle at 82% 18%, rgba(109, 134, 166, 0.12), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.18))",
    cardFrom: "#6f5a31",
    cardTo: "#2a2318",
    ink: "#f1e4c7",
    muted: "#d1c09e",
    accent: "#d4b16a",
    items: []
  },
  {
    id: "literature",
    label: "Literature",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(233, 224, 214, 1) 0%, rgba(221, 208, 194, 1) 100%)",
    overlay:
      "radial-gradient(circle at 10% 14%, rgba(158, 121, 105, 0.15), transparent 24%), radial-gradient(circle at 84% 20%, rgba(109, 134, 166, 0.12), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(40,28,21,0.02))",
    cardFrom: "#dccdbd",
    cardTo: "#f4ece4",
    ink: "#2e211b",
    muted: "#6b5750",
    accent: "#9e7969",
    items: [
      {
        badge: "Novel",
        meta: "Long-form fiction",
        title: "La Bacanora",
        href: "#contact"
      },
      {
        badge: "Fiction",
        meta: "Stories",
        title: "Short fiction",
        href: "#contact"
      },
      {
        badge: "Essay",
        meta: "Fundacao Cultural Watari",
        title: "O jardim de Yvonne Mascarenhas",
        href: "https://www.fcw.org.br/post/o-jardim-de-yvonne-mascarenhas"
      },
      {
        badge: "Essay",
        meta: "IFSC USP",
        title:
          "Reuniao plenaria da Pontificia Academia das Ciencias do Vaticano",
        href: "https://www2.ifsc.usp.br/portal-ifsc/reuniao-plenaria-da-pontificia-academia-das-ciencias-do-vaticano/"
      },
      {
        badge: "Notes",
        meta: "Essays and reflections",
        title: "Articles and notebooks",
        href: "#contact"
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(217, 223, 219, 1) 0%, rgba(202, 210, 206, 1) 100%)",
    overlay:
      "radial-gradient(circle at 16% 14%, rgba(109, 134, 166, 0.15), transparent 24%), radial-gradient(circle at 86% 20%, rgba(118, 136, 123, 0.16), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(31,39,34,0.03))",
    cardFrom: "#d9e0db",
    cardTo: "#b8c3be",
    ink: "#1f2723",
    muted: "#596762",
    accent: "#6e8d7a",
    items: [
      {
        badge: "Work",
        meta: "Scientific and technical review",
        title: "Technical diligence",
        href: "#contact"
      },
      {
        badge: "Work",
        meta: "Imaging and biophysics",
        title: "Research assessment",
        href: "#contact"
      },
      {
        badge: "Work",
        meta: "Technology and product",
        title: "Systems evaluation",
        href: "#contact"
      },
      {
        badge: "Work",
        meta: "Capital and process",
        title: "Investment analysis",
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
