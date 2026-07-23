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
  themes?: string[];
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
  { label: "Innovation", href: "#innovation" },
  { label: "Teaching", href: "#teaching" },
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
        note:
          "Shows how the environmental stress response reorganizes cytoplasmic material properties to protect cells in quiescence.",
        themes: ["Stress & quiescence", "Cytoplasmic biophysics"]
      },
      {
        badge: "2025",
        meta: "Molecular Cell",
        title:
          "Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress",
        href: "https://www.sciencedirect.com/science/article/pii/S1097276525009001",
        note:
          "Connects transcription timing with selective translation during acute stress to explain how cells prioritize new gene expression.",
        themes: ["Stress & quiescence", "Genome regulation"]
      },
      {
        badge: "2025",
        meta: "Cell Reports",
        title:
          "Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm",
        href: "https://doi.org/10.1016/j.celrep.2025.116204",
        note:
          "Demonstrates that ribosome-loaded mRNA is a major determinant of the physical behavior of the eukaryotic cytoplasm.",
        themes: ["Cytoplasmic biophysics", "Genome regulation"]
      },
      {
        badge: "2025",
        meta: "eLife",
        title:
          "SMARCAD1 and TOPBP1 contribute to heterochromatin maintenance at the transition from the 2C-like to the pluripotent state",
        href: "https://doi.org/10.7554/eLife.87742",
        note:
          "Identifies SMARCAD1 and TOPBP1 as regulators of heterochromatin recovery during the transition from 2C-like cells back to pluripotency.",
        themes: ["Stem cells", "Genome regulation", "Chromatin dynamics"]
      },
      {
        badge: "2024",
        meta: "Nucleic Acids Research",
        title:
          "The relationship between nanoscale genome organization and gene expression in mouse embryonic stem cells during pluripotency transition",
        href: "https://doi.org/10.1093/nar/gkae476",
        note:
          "Links nanoscale genome remodeling to changes in pluripotency gene expression during the transition from naive to primed stem-cell states.",
        themes: ["Stem cells", "Genome regulation", "Imaging methods"]
      },
      {
        badge: "2021",
        meta: "Molecular Cell",
        title:
          "Transcription-mediated supercoiling regulates genome folding and loop formation",
        href: "https://doi.org/10.1016/j.molcel.2021.06.009",
        note:
          "Shows that transcription-generated supercoiling directly contributes to loop formation and large-scale genome folding.",
        themes: ["Genome regulation", "Chromatin dynamics"]
      },
      {
        badge: "2021",
        meta: "Cell Reports",
        title:
          "Distinct properties and functions of CTCF revealed by a rapidly inducible degron system",
        href: "https://doi.org/10.1016/j.celrep.2021.108783",
        note:
          "Uses an inducible degron system to reveal that different CTCF sites vary in chromatin residence, boundary strength, and transcriptional roles.",
        themes: ["Genome regulation", "Chromatin dynamics"]
      },
      {
        badge: "2021",
        meta: "Cell Reports",
        title:
          "Mesoscale Modeling and Single-Nucleosome Tracking Reveal Remodeling of Clutch Folding and Dynamics in Stem Cell Differentiation",
        href: "https://doi.org/10.1016/j.celrep.2020.108614",
        note:
          "Combines modeling and single-nucleosome tracking to show how nucleosome clutch organization is remodeled during stem-cell differentiation.",
        themes: ["Stem cells", "Chromatin dynamics", "Imaging methods"]
      },
      {
        badge: "2020",
        meta: "STAR Protocols",
        title:
          "Two-parameter single-molecule analysis for measurement of chromatin mobility",
        href: "https://doi.org/10.1016/j.xpro.2020.100223",
        note:
          "Provides a practical workflow for quantifying chromatin mobility from single-molecule tracking in living cells.",
        themes: ["Imaging methods", "Chromatin dynamics"]
      },
      {
        badge: "2020",
        meta: "Molecular Cell",
        title:
          "Two-parameter mobility assessments discriminate diverse regulatory factor behaviors in chromatin",
        href: "https://doi.org/10.1016/j.molcel.2020.05.036",
        note:
          "Introduces a two-parameter mobility framework that separates how regulatory proteins search, bind, and behave on chromatin.",
        themes: ["Chromatin dynamics", "Imaging methods"]
      },
      {
        badge: "2019",
        meta: "Nucleic Acids Research",
        title:
          "Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo",
        href: "https://doi.org/10.1093/nar/gkz593",
        note:
          "Measures how histone acetylation changes nucleosomal DNA compaction directly inside living cells with super-resolution microscopy.",
        themes: ["Chromatin dynamics", "Imaging methods"]
      },
      {
        badge: "2018",
        meta: "Proceedings of the National Academy of Sciences",
        title:
          "Excitation-multiplexed multicolor superresolution imaging with fm-STORM and fm-DNA-PAINT",
        href: "https://doi.org/10.1073/pnas.1804725115",
        note:
          "Develops a multiplexed super-resolution microscopy approach that accelerates multicolor imaging without sacrificing field of view.",
        themes: ["Imaging methods"]
      },
      {
        badge: "2018",
        meta: "Nucleic Acids Research",
        title:
          "(Po)STAC (Polycistronic SunTAg modified CRISPR) enables live-cell and fixed-cell super-resolution imaging of multiple genes",
        href: "https://doi.org/10.1093/nar/gkx1271",
        note:
          "Introduces a CRISPR-SunTag labeling strategy for multiplexed live-cell and fixed-cell super-resolution imaging of genes.",
        themes: ["Imaging methods", "Genome regulation"]
      },
      {
        badge: "2017",
        meta: "Photodiagnosis and Photodynamic Therapy",
        title:
          "Photophysical and photobiological properties of the redaporfin photosensitizer",
        href: "https://doi.org/10.1016/j.pdpdt.2017.04.012",
        note:
          "Characterizes the light-driven and biological behavior of redaporfin to support its use in photodynamic therapy.",
        themes: ["Optical biophotonics"]
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
    id: "innovation",
    label: "Technology & Innovation",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(221, 227, 226, 1) 0%, rgba(206, 214, 211, 1) 100%)",
    overlay:
      "radial-gradient(circle at 16% 14%, rgba(109, 134, 166, 0.15), transparent 24%), radial-gradient(circle at 86% 20%, rgba(133, 121, 93, 0.16), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(31,39,34,0.03))",
    cardFrom: "#dde3df",
    cardTo: "#c0c9c5",
    ink: "#1f2723",
    muted: "#596762",
    accent: "#6d86a6",
    items: [
      {
        badge: "Patent",
        meta: "US Patent 11,287,628 B2 · Granted 2022",
        title: "Multi-color imaging",
        href: "https://patents.google.com/patent/US11287628",
        note:
          "Frequency-modulated multicolor imaging for faster fluorescence and super-resolution acquisition with simpler optical layouts."
      },
      {
        badge: "Patent",
        meta: "BR 10 2015 026020 2 B1 · Granted",
        title:
          "Portable reflectance and fluorescence microendoscope for smartphones",
        href: "https://bv.fapesp.br/en/papi-nuplitec/808/microendoscopio-de-refletancia-e-fluorescencia-portatil-acoplavel-a-smartphones-e-similares-e-seus/",
        note:
          "Portable smartphone-coupled reflectance and fluorescence microendoscope for biomedical imaging and point-of-care applications."
      },
      {
        badge: "Service",
        meta: "Deep-tech assessment",
        title: "Technical diligence",
        href: "#contact"
      },
      {
        badge: "Service",
        meta: "Microscopy, software, and instrumentation",
        title: "R&D and product evaluation",
        href: "#contact"
      },
      {
        badge: "Service",
        meta: "Science translated into decisions",
        title: "Technology strategy and communication",
        href: "#contact"
      }
    ]
  },
  {
    id: "teaching",
    label: "Teaching",
    layout: "landscape",
    background:
      "linear-gradient(180deg, rgba(232, 229, 220, 1) 0%, rgba(220, 214, 201, 1) 100%)",
    overlay:
      "radial-gradient(circle at 14% 16%, rgba(109, 134, 166, 0.12), transparent 24%), radial-gradient(circle at 84% 20%, rgba(162, 138, 97, 0.14), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(42,34,22,0.03))",
    cardFrom: "#e7e0d2",
    cardTo: "#cdc1ae",
    ink: "#292118",
    muted: "#6a5c4a",
    accent: "#7e8fa8",
    items: [
      {
        badge: "2026",
        meta: "ETH Zurich · MSc lecture",
        title: "Scientific Concepts and Methods",
        href: "#teaching",
        note:
          "Four-hour lecture for master's students in Pharmacy, Biology, Biotechnology, and Translational Sciences."
      },
      {
        badge: "2024",
        meta: "ETH Zurich · BSc lecture",
        title: "Advanced microscopy techniques for biology",
        href: "#teaching",
        note:
          "Optical methods lecture on modern microscopy for bachelor students."
      },
      {
        badge: "2024",
        meta: "ETH Zurich · BSc lecture",
        title: "Cell dynamics and anomalous diffusion",
        href: "#teaching",
        note:
          "Short lecture on quantitative cell dynamics and non-Brownian transport."
      },
      {
        badge: "2021–2024",
        meta: "ETH Zurich · Practical teaching",
        title: "Molecular and cell biology tools",
        href: "#teaching",
        note:
          "Led Grundlagen practical courses for bachelor students across approximately 50 teaching hours."
      },
      {
        badge: "2024",
        meta: "ETH Zurich · Supervision",
        title: "Cell-iSCAT semester project",
        href: "#teaching",
        note:
          "Supervised a master project on quantifying macromolecular crowding dynamics in single live cells."
      },
      {
        badge: "2022",
        meta: "ETH Zurich · Block course",
        title: "Tools for probing living cells and image analysis methods",
        href: "#teaching",
        note:
          "Four-week practical teaching in live-cell methods and image analysis for bachelor students."
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
