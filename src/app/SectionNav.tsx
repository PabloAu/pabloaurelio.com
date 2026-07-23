"use client";

import { useEffect, useState } from "react";
import type { SectionLink } from "@/data/site-content";

type SectionNavProps = {
  links: SectionLink[];
};

export function SectionNav({ links }: SectionNavProps) {
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
      aria-label="Section navigation"
    >
      <div className="scroll-nav-inner">
        <a className="scroll-nav-brand" href="#top">
          pabloaurelio
        </a>

        <div className="scroll-nav-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
