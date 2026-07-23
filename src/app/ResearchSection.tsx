"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { getThemeLabel, type Language } from "@/data/localized-content";
import type { GallerySection } from "@/data/site-content";

type ResearchSectionProps = {
  section: GallerySection;
  intro: string;
  language: Language;
  themesAriaLabel: string;
};

const THEME_ORDER = [
  "All",
  "Stress & quiescence",
  "Cytoplasmic biophysics",
  "Genome regulation",
  "Chromatin dynamics",
  "Imaging methods",
  "Stem cells",
  "Optical biophotonics"
];

const THEME_ACCENTS: Record<string, { accent: string; glow: string }> = {
  All: { accent: "#6d86a6", glow: "rgba(109, 134, 166, 0.18)" },
  "Stress & quiescence": {
    accent: "#6d86a6",
    glow: "rgba(109, 134, 166, 0.18)"
  },
  "Cytoplasmic biophysics": {
    accent: "#8c9c76",
    glow: "rgba(140, 156, 118, 0.18)"
  },
  "Genome regulation": {
    accent: "#6b8a8b",
    glow: "rgba(107, 138, 139, 0.18)"
  },
  "Chromatin dynamics": {
    accent: "#8f6f58",
    glow: "rgba(143, 111, 88, 0.18)"
  },
  "Imaging methods": {
    accent: "#5f799e",
    glow: "rgba(95, 121, 158, 0.18)"
  },
  "Stem cells": { accent: "#9a7c91", glow: "rgba(154, 124, 145, 0.18)" },
  "Optical biophotonics": {
    accent: "#9a6f52",
    glow: "rgba(154, 111, 82, 0.18)"
  }
};

function getThemeList(section: GallerySection) {
  const themeSet = new Set<string>();

  section.items.forEach((item) => {
    item.themes?.forEach((theme) => themeSet.add(theme));
  });

  return THEME_ORDER.filter((theme) => theme === "All" || themeSet.has(theme));
}

export function ResearchSection({
  section,
  intro,
  language,
  themesAriaLabel
}: ResearchSectionProps) {
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
        <p>{intro}</p>

        <div className="research-filters" role="tablist" aria-label={themesAriaLabel}>
          {themes.map((theme) => (
            <button
              className={`research-filter${activeTheme === theme ? " is-active" : ""}`}
              key={theme}
              onClick={() => setActiveTheme(theme)}
              type="button"
            >
              {getThemeLabel(language, theme)}
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
                      {getThemeLabel(language, theme)}
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
