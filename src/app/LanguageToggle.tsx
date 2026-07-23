"use client";

import type { Language } from "@/data/localized-content";

type LanguageToggleProps = {
  ariaLabel: string;
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({
  ariaLabel,
  language,
  onChange
}: LanguageToggleProps) {
  return (
    <div className="language-switch" aria-label={ariaLabel} role="group">
      <button
        className={`language-switch-button${language === "en" ? " is-active" : ""}`}
        onClick={() => onChange("en")}
        type="button"
      >
        En
      </button>
      <span className="language-switch-divider" aria-hidden="true">
        /
      </span>
      <button
        className={`language-switch-button${language === "es" ? " is-active" : ""}`}
        onClick={() => onChange("es")}
        type="button"
      >
        Es
      </button>
    </div>
  );
}
