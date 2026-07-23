"use client";

import { useEffect, useState } from "react";
import { LanguageToggle } from "@/app/LanguageToggle";
import type { Language } from "@/data/localized-content";
import type { SectionLink } from "@/data/site-content";

type SectionNavProps = {
  links: SectionLink[];
  language: Language;
  navAriaLabel: string;
  languageSwitchLabel: string;
  onChangeLanguage: (language: Language) => void;
};

export function SectionNav({
  links,
  language,
  navAriaLabel,
  languageSwitchLabel,
  onChangeLanguage
}: SectionNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      const researchSection = document.getElementById("research");

      if (!researchSection) {
        return;
      }

      setIsVisible(researchSection.getBoundingClientRect().top <= 100);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <nav
      className={`scroll-nav${isVisible ? " is-visible" : ""}`}
      aria-label={navAriaLabel}
    >
      <div className="scroll-nav-inner">
        <a className="scroll-nav-brand" href="#top">
          pabloaurelio
        </a>

        <div className="scroll-nav-controls">
          <div className="scroll-nav-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <LanguageToggle
            ariaLabel={languageSwitchLabel}
            language={language}
            onChange={onChangeLanguage}
          />
        </div>
      </div>
    </nav>
  );
}
