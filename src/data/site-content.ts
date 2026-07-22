export type SectionLink = {
  label: string;
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

export type AtlasClusterId =
  | "research"
  | "software"
  | "apps"
  | "slowball"
  | "writing"
  | "consulting"
  | "marginalia";

export type AtlasAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type AtlasItem = {
  eyebrow: string;
  title: string;
  meta: string;
  blurb: string;
  href: string;
};

export type AtlasSpotlight = {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
};

export type AtlasCluster = {
  id: AtlasClusterId;
  label: string;
  title: string;
  description: string;
  note: string;
  color: string;
  glow: string;
  surface: string;
  position: {
    x: number;
    y: number;
  };
  stats: string[];
  actions: AtlasAction[];
  spotlight: AtlasSpotlight;
  items: AtlasItem[];
};

export type AtlasEdge = {
  from: AtlasClusterId | "hub";
  to: AtlasClusterId;
};

export const topLinks: SectionLink[] = [
  { label: "CV", href: "/documents/pablo-aurelio-resume.pdf" },
  {
    label: "Scholar",
    href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
  },
  { label: "GitHub", href: "https://github.com/PabloAu" }
];

export const sectionLinks: SectionLink[] = [
  { label: "Atlas", href: "#atlas" },
  { label: "Archive", href: "#marginalia" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const hubHighlights = [
  "7 connected practice areas",
  "Interactive graph-first navigation",
  "Science, software, writing, and capital"
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

export const atlasClusters: AtlasCluster[] = [
  {
    id: "research",
    label: "Research",
    title: "Microscopy, biophysics, and quantitative biology",
    description:
      "Publications, imaging methods, chromatin, cytoplasm, and data-heavy biological work.",
    note:
      "This branch should feel like a live research surface: papers, methods, figures, and scientific judgment held in one cluster.",
    color: "#56dfd0",
    glow: "rgba(86, 223, 208, 0.34)",
    surface: "rgba(18, 42, 45, 0.94)",
    position: { x: 20, y: 18 },
    stats: [
      "6 selected papers",
      "Super-resolution microscopy",
      "Chromatin and cytoplasm biophysics"
    ],
    actions: [
      {
        label: "Open Scholar profile",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es",
        variant: "primary"
      },
      {
        label: "Contact for collaboration",
        href: "#contact",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Latest thread",
      title:
        "The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence",
      copy:
        "A good entry point for the scientific branch: quantitative cell biology, stress response, and biophysical reasoning.",
      href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
    },
    items: [
      {
        eyebrow: "2026",
        title:
          "The environmental stress response regulates biophysics of the cytoplasm and survival in quiescence",
        meta: "Journal of Cell Biology",
        blurb: "A recent publication around stress response and cell-state physics.",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        eyebrow: "2025",
        title:
          "Timing of transcription controls the selective translation of newly synthesized mRNAs during acute environmental stress",
        meta: "Molecular Cell",
        blurb: "Transcription timing and translation control under acute stress.",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        eyebrow: "2025",
        title:
          "Polysomes and mRNA control the biophysical properties of the eukaryotic cytoplasm",
        meta: "Cell Reports",
        blurb: "An important bridge between molecular machinery and physical behavior.",
        href: "https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
      },
      {
        eyebrow: "2019",
        title:
          "Super-resolution microscopy reveals how histone tail acetylation affects DNA compaction within nucleosomes in vivo",
        meta: "Nucleic Acids Research",
        blurb: "Microscopy-led chromatin work with a strong visual identity.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6895258/"
      }
    ]
  },
  {
    id: "software",
    label: "Software",
    title: "Analytical tools, code, and experimental systems",
    description:
      "A branch for repositories, scientific tooling, internal workflows, and build-heavy experimentation.",
    note:
      "This is not just a repo list. It should read as a practice of building systems for understanding, analysis, and decision support.",
    color: "#67a4ff",
    glow: "rgba(103, 164, 255, 0.32)",
    surface: "rgba(18, 29, 48, 0.94)",
    position: { x: 79, y: 19 },
    stats: [
      "Public repositories",
      "Scientific analysis pipelines",
      "Decision-system architecture"
    ],
    actions: [
      {
        label: "Open GitHub",
        href: "https://github.com/PabloAu",
        variant: "primary"
      },
      {
        label: "Jump to contact",
        href: "#contact",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Build thread",
      title: "Scientific software with a product mind-set",
      copy:
        "The build branch brings together analytical workflows, code experiments, and more product-like interfaces for your own systems.",
      href: "https://github.com/PabloAu"
    },
    items: [
      {
        eyebrow: "Repository",
        title: "CellRaQ",
        meta: "Scientific tooling",
        blurb: "Cellular RNA quantification tooling for experimental workflows.",
        href: "https://github.com/PabloAu/CellRaQ"
      },
      {
        eyebrow: "Repository",
        title: "Single-Molecule-Tracking-Analysis",
        meta: "Motion inference and analysis",
        blurb: "Analysis workflows for single-molecule tracking experiments.",
        href: "https://github.com/PabloAu/Single-Molecule-Tracking-Analysis"
      },
      {
        eyebrow: "Repository",
        title: "Two-Parameter-SMT",
        meta: "Chromatin and mobility",
        blurb:
          "Single-molecule tracking focused on chromatin and transcription-factor movement.",
        href: "https://github.com/PabloAu/Two-Parameter-SMT"
      },
      {
        eyebrow: "System",
        title: "SlowballTracker",
        meta: "Portfolio software",
        blurb:
          "A portfolio-tracking branch linking analysis, product design, and capital work.",
        href: "#contact"
      }
    ]
  },
  {
    id: "apps",
    label: "Apps",
    title: "Personal Lab and Capital Lab",
    description:
      "Interactive decision environments for judgment, knowledge, and long-horizon operating systems.",
    note:
      "This cluster should eventually feel like a product garden: live apps, prototypes, and linked methods, not just descriptions.",
    color: "#ff8d72",
    glow: "rgba(255, 141, 114, 0.28)",
    surface: "rgba(50, 24, 28, 0.94)",
    position: { x: 87, y: 44 },
    stats: [
      "2 active app directions",
      "Knowledge and capital systems",
      "Decision-support interfaces"
    ],
    actions: [
      {
        label: "Discuss product direction",
        href: "#contact",
        variant: "primary"
      },
      {
        label: "Open GitHub context",
        href: "https://github.com/PabloAu",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "In development",
      title: "Decision tools with a more authored interface language",
      copy:
        "These apps are the natural bridge between your software practice and the slower operating systems you are building for yourself.",
      href: "#contact"
    },
    items: [
      {
        eyebrow: "App",
        title: "Personal Lab",
        meta: "Knowledge and decisions",
        blurb:
          "A system for structuring experiments, thinking, memory, and personal operating principles.",
        href: "#contact"
      },
      {
        eyebrow: "App",
        title: "Capital Lab",
        meta: "Research and allocation",
        blurb:
          "A product direction for portfolio research, capital allocation, and long-horizon judgment.",
        href: "#contact"
      },
      {
        eyebrow: "Interface",
        title: "Interactive dashboards",
        meta: "Graphs, mosaics, and evidence maps",
        blurb:
          "A visual language for connecting decision systems, notes, and structured analysis.",
        href: "#atlas"
      },
      {
        eyebrow: "System",
        title: "Personal operating surfaces",
        meta: "Practical prototypes",
        blurb:
          "Interfaces that behave more like working rooms than static pages.",
        href: "#atlas"
      }
    ]
  },
  {
    id: "slowball",
    label: "Slowball",
    title: "Capital, patience, and long-horizon tooling",
    description:
      "The Slowball project, tracker work, investing philosophy, and capital-oriented writing.",
    note:
      "Slowball deserves its own visual identity inside the site: not finance wallpaper, but a patient systems branch with its own tempo.",
    color: "#f5c35c",
    glow: "rgba(245, 195, 92, 0.28)",
    surface: "rgba(53, 42, 17, 0.94)",
    position: { x: 74, y: 77 },
    stats: [
      "Project philosophy",
      "Tracker and portfolio tools",
      "A bridge between essays and software"
    ],
    actions: [
      {
        label: "Visit Slowball",
        href: "https://slowball.ch/man",
        variant: "primary"
      },
      {
        label: "Talk about capital systems",
        href: "#contact",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Project branch",
      title: "A long-horizon system rather than a market feed",
      copy:
        "Slowball links philosophy, portfolio tooling, product work, and the mental models behind long-duration decisions.",
      href: "https://slowball.ch/man"
    },
    items: [
      {
        eyebrow: "Project",
        title: "Slowball manual",
        meta: "Philosophy and approach",
        blurb: "The written front door for the Slowball way of thinking.",
        href: "https://slowball.ch/man"
      },
      {
        eyebrow: "Tool",
        title: "SlowballTracker",
        meta: "Portfolio tracking",
        blurb: "A direct product expression of the project’s capital branch.",
        href: "#contact"
      },
      {
        eyebrow: "Bridge",
        title: "Capital Lab",
        meta: "Product extension",
        blurb:
          "The app branch that extends Slowball into an interactive decision environment.",
        href: "#contact"
      },
      {
        eyebrow: "Writing",
        title: "Essays and capital notes",
        meta: "Long-horizon judgment",
        blurb:
          "A place for thought, not noise: evidence-based and patient writing about allocation.",
        href: "#writing"
      }
    ]
  },
  {
    id: "writing",
    label: "Writing",
    title: "Novels, short stories, essays, and authored work",
    description:
      "A quieter cluster for La Bacanora, short fiction, essays, and reflective writing.",
    note:
      "The writing branch should feel calmer than the code branch: more room, less dashboard language, and more attention to voice.",
    color: "#ec7eb4",
    glow: "rgba(236, 126, 180, 0.28)",
    surface: "rgba(49, 22, 39, 0.94)",
    position: { x: 24, y: 78 },
    stats: [
      "Novel and short fiction",
      "Essays and articles",
      "A literary branch with publication room"
    ],
    actions: [
      {
        label: "Open writing cluster",
        href: "#atlas",
        variant: "primary"
      },
      {
        label: "Discuss publication plans",
        href: "#contact",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Featured work",
      title: "La Bacanora",
      copy:
        "The literary branch has room for publication planning, excerpts, essays, and slower authored work that should not be buried under software.",
      href: "#contact"
    },
    items: [
      {
        eyebrow: "Novel",
        title: "La Bacanora",
        meta: "Featured literary project",
        blurb:
          "A primary work with room for publication updates, excerpts, and supporting essays.",
        href: "#contact"
      },
      {
        eyebrow: "Fiction",
        title: "Short Stories",
        meta: "Narrative branch",
        blurb:
          "A space for smaller pieces, quieter works, and future published selections.",
        href: "#contact"
      },
      {
        eyebrow: "Essay",
        title: "Articles and reflections",
        meta: "Long-form thinking",
        blurb:
          "Analytical essays, scientific communication, and public-facing thought.",
        href: "#contact"
      },
      {
        eyebrow: "Author surface",
        title: "Publication notes",
        meta: "Futures and excerpts",
        blurb:
          "A place to make the literary branch feel authored rather than tucked away.",
        href: "#contact"
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    title: "Technical diligence and analytical support",
    description:
      "Scientific, software, and product-oriented diligence work for careful evaluation and synthesis.",
    note:
      "This branch should communicate trust: structured evaluation, scientific rigor, and direct, useful thinking rather than vague advisory language.",
    color: "#86d783",
    glow: "rgba(134, 215, 131, 0.28)",
    surface: "rgba(24, 44, 30, 0.94)",
    position: { x: 13, y: 46 },
    stats: [
      "Scientific review",
      "Software and product diligence",
      "Analytical advisory work"
    ],
    actions: [
      {
        label: "Start a conversation",
        href: "#contact",
        variant: "primary"
      },
      {
        label: "Download CV",
        href: "/documents/pablo-aurelio-resume.pdf",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Consulting branch",
      title: "Clear judgment for technical work",
      copy:
        "This branch is for diligence, review, and analytical support across science, software, methods, and product systems.",
      href: "#contact"
    },
    items: [
      {
        eyebrow: "Service",
        title: "Technical diligence",
        meta: "Science and software projects",
        blurb:
          "Structured evaluation of technical projects, methods, and implementation depth.",
        href: "#contact"
      },
      {
        eyebrow: "Service",
        title: "Research and methodology review",
        meta: "Scientific rigor",
        blurb:
          "Thoughtful review of methods, evidence, and technical assumptions.",
        href: "#contact"
      },
      {
        eyebrow: "Service",
        title: "Product and systems review",
        meta: "Decision frameworks",
        blurb:
          "Support for decision systems, analytical tooling, and product framing.",
        href: "#contact"
      },
      {
        eyebrow: "Service",
        title: "Image and data workflows",
        meta: "Imaging and modeling",
        blurb:
          "Evaluation of image, data, and modeling pipelines with technical care.",
        href: "#contact"
      }
    ]
  },
  {
    id: "marginalia",
    label: "Marginalia",
    title: "A recommendation wall for books, papers, and essays",
    description:
      "An archive-like shelf for the books, essays, and readings that influence the rest of the graph.",
    note:
      "This branch is deliberately visual. It can behave more like a shelf, catalogue, or stream than a conventional reading list.",
    color: "#af8bff",
    glow: "rgba(175, 139, 255, 0.3)",
    surface: "rgba(36, 28, 56, 0.94)",
    position: { x: 50, y: 89 },
    stats: [
      "20 catalogue slots ready",
      "Books, essays, and papers",
      "Expandable into a richer archive"
    ],
    actions: [
      {
        label: "Open the archive wall",
        href: "#marginalia",
        variant: "primary"
      },
      {
        label: "Suggest a reading",
        href: "#contact",
        variant: "secondary"
      }
    ],
    spotlight: {
      eyebrow: "Archive mode",
      title: "A visual catalogue rather than a plain list",
      copy:
        "The reading branch is already structured as a mosaic wall so it can later hold real covers, links, and annotations.",
      href: "#marginalia"
    },
    items: [
      {
        eyebrow: "Shelf",
        title: "Science selections",
        meta: "Papers and technical books",
        blurb: "A place for books and papers that feed the scientific branch.",
        href: "#marginalia"
      },
      {
        eyebrow: "Shelf",
        title: "Essay selections",
        meta: "Long-form thought",
        blurb:
          "Texts that influence how the analytical and literary branches are framed.",
        href: "#marginalia"
      },
      {
        eyebrow: "Shelf",
        title: "Literature selections",
        meta: "Novels and short fiction",
        blurb:
          "A reading wall with room for literary references and private canon-building.",
        href: "#marginalia"
      },
      {
        eyebrow: "Shelf",
        title: "Capital selections",
        meta: "Long-horizon reading",
        blurb:
          "Books and essays that connect back into Slowball and capital allocation.",
        href: "#marginalia"
      }
    ]
  }
];

export const atlasEdges: AtlasEdge[] = [
  { from: "hub", to: "research" },
  { from: "hub", to: "software" },
  { from: "hub", to: "apps" },
  { from: "hub", to: "slowball" },
  { from: "hub", to: "writing" },
  { from: "hub", to: "consulting" },
  { from: "hub", to: "marginalia" },
  { from: "research", to: "software" },
  { from: "software", to: "apps" },
  { from: "apps", to: "slowball" },
  { from: "writing", to: "marginalia" },
  { from: "consulting", to: "research" }
];
