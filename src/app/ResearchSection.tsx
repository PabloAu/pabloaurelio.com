"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import type { GallerySection } from "@/data/site-content";

type ResearchSectionProps = {
  section: GallerySection;
};

const THEME_ORDER = [
  "All",
  "Stress response",
  "Cytoplasm",
  "Chromatin",
  "Imaging",
  "Translation",
  "Quiescence",
  "Methods",
  "Biophysics",
  "Gene regulation",
  "DNA replication",
  "Epigenetics",
  "Cell cycle",
  "Photophysics",
  "Software"
];

const THEME_ACCENTS: Record<string, { accent: string; glow: string }> = {
  All: { accent: "#6d86a6", glow: "rgba(109, 134, 166, 0.18)" },
  "Stress response": { accent: "#6d86a6", glow: "rgba(109, 134, 166, 0.18)" },
  Cytoplasm: { accent: "#8c9c76", glow: "rgba(140, 156, 118, 0.18)" },
  Chromatin: { accent: "#8f6f58", glow: "rgba(143, 111, 88, 0.18)" },
  Imaging: { accent: "#5f799e", glow: "rgba(95, 121, 158, 0.18)" },
  Translation: { accent: "#af8753", glow: "rgba(175, 135, 83, 0.18)" },
  Quiescence: { accent: "#748b87", glow: "rgba(116, 139, 135, 0.18)" },
  Methods: { accent: "#85714d", glow: "rgba(133, 113, 77, 0.18)" },
  Biophysics: { accent: "#7a7aa1", glow: "rgba(122, 122, 161, 0.18)" },
  "Gene regulation": { accent: "#6b8a8b", glow: "rgba(107, 138, 139, 0.18)" },
  "DNA replication": { accent: "#8f7c68", glow: "rgba(143, 124, 104, 0.18)" },
  Epigenetics: { accent: "#9a7c91", glow: "rgba(154, 124, 145, 0.18)" },
  "Cell cycle": { accent: "#9d815f", glow: "rgba(157, 129, 95, 0.18)" },
  Photophysics: { accent: "#9a6f52", glow: "rgba(154, 111, 82, 0.18)" },
  Software: { accent: "#7a829b", glow: "rgba(122, 130, 155, 0.18)" }
};

function getThemeList(section: GallerySection) {
  const themeSet = new Set<string>();

  section.items.forEach((item) => {
    item.themes?.forEach((theme) => themeSet.add(theme));
  });

  return THEME_ORDER.filter((theme) => theme === "All" || themeSet.has(theme));
}

export function ResearchSection({ section }: ResearchSectionProps) {
  const [activeTheme, setActiveTheme] = useState("All");
  const themes = useMemo(() => getThemeList(section), [section]);

  const visibleItems = useMemo(() => {
    if (activeTheme === "All") {
      return section.items;
    }

    return section.items.filter((item) => item.themes?.includes(activeTheme));
  }, [activeTheme, section.items]);

  return (
    <div className="research-panel">
      <div className="research-intro">
        <p>
          A line of work across cytoplasmic biophysics, chromatin organization,
          microscopy, quiescence, and stress response.
        </p>

        <div className="research-filters" role="tablist" aria-label="Research themes">
          {themes.map((theme) => (
            <button
              className={`research-filter${activeTheme === theme ? " is-active" : ""}`}
              key={theme}
              onClick={() => setActiveTheme(theme)}
              type="button"
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="research-grid">
        {visibleItems.map((item) => {
          const leadTheme = item.themes?.[0] ?? "All";
          const themeAccent = THEME_ACCENTS[leadTheme] ?? THEME_ACCENTS.All;

          return (
            <a
              className="research-card"
              href={item.href}
              key={`${item.badge}-${item.title}`}
              rel="noreferrer"
              style={
                {
                  "--research-accent": themeAccent.accent,
                  "--research-glow": themeAccent.glow
                } as CSSProperties
              }
              target="_blank"
            >
              <div className="research-card-top">
                <span className="research-year">{item.badge}</span>
                <span className="research-journal">{item.meta}</span>
                <div className="research-schematic" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <h3>{item.title}</h3>
              {item.note ? <p className="research-summary">{item.note}</p> : null}

              {item.themes?.length ? (
                <div className="research-tags">
                  {item.themes.map((theme) => (
                    <span className="research-tag" key={`${item.title}-${theme}`}>
                      {theme}
                    </span>
                  ))}
                </div>
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}
