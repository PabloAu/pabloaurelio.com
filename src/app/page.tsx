import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactForm } from "@/app/ContactForm";
import {
  contactLinks,
  gallerySections,
  heroQuote,
  sectionNavLinks
} from "@/data/site-content";

function buildSectionStyles(section: (typeof gallerySections)[number]) {
  return {
    "--section-bg": section.background,
    "--section-overlay": section.overlay,
    "--section-card-from": section.cardFrom,
    "--section-card-to": section.cardTo,
    "--section-ink": section.ink,
    "--section-muted": section.muted,
    "--section-accent": section.accent
  } as CSSProperties;
}

function escapeSvgText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function hashValue(value: string) {
  return Array.from(value).reduce(
    (total, char, index) => total + char.charCodeAt(0) * (index + 11),
    0
  );
}

function buildAnchorProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
}

function buildCardArtwork(
  section: (typeof gallerySections)[number],
  item: (typeof gallerySections)[number]["items"][number]
) {
  const seed = hashValue(`${section.id}-${item.title}`);
  const shiftA = 18 + (seed % 62);
  const shiftB = 28 + (Math.floor(seed / 5) % 84);
  const shiftC = 44 + (Math.floor(seed / 7) % 52);
  const titleWord = escapeSvgText(item.title.split(" ").slice(0, 2).join(" "));
  const badge = escapeSvgText(item.badge);
  const meta = escapeSvgText(item.meta);

  let art = `
    <rect width="1200" height="1500" fill="${section.cardTo}" />
    <rect x="44" y="44" width="1112" height="1412" rx="42" fill="${section.cardFrom}" opacity="0.58" />
  `;

  if (section.id === "research") {
    art += `
      <circle cx="${250 + (seed % 180)}" cy="${260 + shiftA}" r="150" fill="${section.accent}" opacity="0.34" />
      <circle cx="${860 - (seed % 140)}" cy="${420 + shiftB}" r="210" fill="${section.cardTo}" opacity="0.4" />
      <path d="M120 1080 C240 ${840 - shiftA}, 360 ${980 - shiftB}, 520 900 S860 ${760 + shiftC}, 1080 600" fill="none" stroke="${section.ink}" stroke-width="22" stroke-linecap="round" opacity="0.72" />
      <path d="M120 1180 C280 ${980 - shiftA}, 470 ${1090 - shiftB}, 670 980 S920 ${860 + shiftC}, 1090 780" fill="none" stroke="${section.accent}" stroke-width="14" stroke-linecap="round" opacity="0.86" />
      <circle cx="${430 + (seed % 120)}" cy="${760 + (shiftA % 140)}" r="34" fill="${section.ink}" opacity="0.68" />
      <circle cx="${760 - (seed % 90)}" cy="${640 + (shiftB % 110)}" r="22" fill="${section.accent}" opacity="0.92" />
    `;
  } else if (section.id === "software") {
    art += `
      <rect x="118" y="160" width="964" height="700" rx="34" fill="${section.ink}" opacity="0.84" />
      <rect x="118" y="160" width="964" height="76" rx="34" fill="${section.accent}" opacity="0.26" />
      <circle cx="178" cy="198" r="13" fill="${section.cardTo}" opacity="0.76" />
      <circle cx="222" cy="198" r="13" fill="${section.cardTo}" opacity="0.56" />
      <circle cx="266" cy="198" r="13" fill="${section.cardTo}" opacity="0.36" />
      <rect x="180" y="310" width="${420 + (seed % 220)}" height="18" rx="9" fill="${section.cardTo}" opacity="0.82" />
      <rect x="180" y="372" width="${300 + (seed % 260)}" height="18" rx="9" fill="${section.cardTo}" opacity="0.54" />
      <rect x="180" y="434" width="${470 + (seed % 180)}" height="18" rx="9" fill="${section.cardTo}" opacity="0.72" />
      <rect x="180" y="496" width="${240 + (seed % 220)}" height="18" rx="9" fill="${section.accent}" opacity="0.9" />
      <rect x="180" y="620" width="820" height="2" fill="${section.cardTo}" opacity="0.18" />
      <rect x="180" y="682" width="${370 + (seed % 210)}" height="18" rx="9" fill="${section.cardTo}" opacity="0.64" />
      <rect x="180" y="744" width="${300 + (seed % 160)}" height="18" rx="9" fill="${section.cardTo}" opacity="0.44" />
    `;
  } else if (section.id === "literature") {
    art += `
      <rect x="158" y="126" width="884" height="1188" rx="22" fill="rgba(255,255,255,0.34)" />
      <path d="M250 360 H948" stroke="${section.accent}" stroke-width="2" opacity="0.4" />
      <path d="M250 458 H948" stroke="${section.accent}" stroke-width="2" opacity="0.24" />
      <path d="M250 556 H948" stroke="${section.accent}" stroke-width="2" opacity="0.24" />
      <path d="M250 654 H948" stroke="${section.accent}" stroke-width="2" opacity="0.24" />
      <text x="226" y="1168" font-family="'Bastardo Grotesk', serif" font-size="320" fill="${section.ink}" opacity="0.14">${escapeSvgText(item.title.charAt(0).toUpperCase())}</text>
    `;
  } else {
    art += `
      <circle cx="${360 + (seed % 200)}" cy="${360 + (shiftA % 180)}" r="170" fill="${section.accent}" opacity="0.28" />
      <circle cx="${760 - (seed % 160)}" cy="${520 + (shiftB % 120)}" r="250" fill="${section.cardTo}" opacity="0.46" />
      <path d="M220 1080 L520 820 L780 980 L1000 700" fill="none" stroke="${section.ink}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
      <circle cx="220" cy="1080" r="20" fill="${section.ink}" opacity="0.72" />
      <circle cx="520" cy="820" r="20" fill="${section.ink}" opacity="0.72" />
      <circle cx="780" cy="980" r="20" fill="${section.ink}" opacity="0.72" />
      <circle cx="1000" cy="700" r="20" fill="${section.accent}" opacity="0.92" />
    `;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
      <defs>
        <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${section.cardFrom}" />
          <stop offset="100%" stop-color="${section.cardTo}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="1500" fill="url(#wash)" />
      ${art}
      <text x="120" y="132" font-family="'Acid Grotesk', sans-serif" font-size="42" letter-spacing="9" fill="${section.ink}" opacity="0.68">${badge}</text>
      <text x="120" y="1400" font-family="'Bastardo Grotesk', serif" font-size="112" fill="${section.ink}" opacity="0.88">${titleWord}</text>
      <text x="120" y="1452" font-family="'Acid Grotesk', sans-serif" font-size="34" letter-spacing="5" fill="${section.ink}" opacity="0.56">${meta}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-shell" id="top">
        <div className="hero-stage">
          <Image
            className="hero-image"
            src="/images/pablo-hero-cajal-vintage-balanced.png"
            alt="Pablo Aurelio Gomez Garcia in a vintage study portrait."
            fill
            priority
            sizes="100vw"
          />

          <div className="hero-patina" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <header className="site-header">
            <div className="site-intro">
              <a className="site-name" href="#top">
                pabloaurelio
              </a>
              <p className="site-summary">
                I work as a senior scientist at ETH Zurich on imaging,
                biophysics, and the behavior of living matter. I also write
                novels, short stories, and essays; build software and decision
                tools; and spend a good part of my time thinking about capital,
                technology, and how people manage wealth with more clarity.
                This page brings those lines of work into one quiet place.
              </p>
            </div>
          </header>

          <nav className="hero-pins" aria-label="Hero navigation">
            {sectionNavLinks.map((link) => (
              <a
                className="hero-pin"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hero-dock">
            <a className="hero-link" href="#research">
              Enter the study
            </a>
          </div>

          <aside className="hero-quote">
            <p>&ldquo;{heroQuote.text}&rdquo;</p>
            <cite>
              <a href={heroQuote.sourceHref} {...buildAnchorProps(heroQuote.sourceHref)}>
                {heroQuote.attribution}, {heroQuote.sourceLabel}
              </a>
            </cite>
          </aside>
        </div>
      </section>

      <nav className="scroll-nav" aria-label="Section navigation">
        <div className="scroll-nav-inner">
          <a className="scroll-nav-brand" href="#top">
            pabloaurelio
          </a>

          <div className="scroll-nav-links">
            {sectionNavLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="study-shell">
        {gallerySections.map((section) => (
          <section
            className={`showcase-section${section.id === "slowball" ? " slowball-section" : ""}`}
            id={section.id}
            key={section.id}
            style={buildSectionStyles(section)}
          >
            <div className="showcase-inner">
              <div className="section-head">
                <h2>{section.label}</h2>
                {section.linkHref && section.linkLabel ? (
                  <a
                    className="section-link"
                    href={section.linkHref}
                    {...buildAnchorProps(section.linkHref)}
                  >
                    {section.linkLabel}
                  </a>
                ) : null}
              </div>

              {section.id === "slowball" ? (
                <div className="slowball-feature">
                  <div className="slowball-copy">
                    <p className="slowball-kicker">Investing education</p>
                    <h3>Slowball</h3>
                    <p>
                      Slowball is my investing project for patient capital,
                      financial education, and clearer reasoning under
                      uncertainty. It is where long-horizon thinking, portfolio
                      structure, and visual explanation come together.
                    </p>
                    <a
                      className="slowball-link"
                      href="https://slowball.ch"
                      {...buildAnchorProps("https://slowball.ch")}
                    >
                      Visit slowball.ch
                    </a>
                  </div>

                  <div className="slowball-figure">
                    <Image
                      src="/images/slowball/slowball-assets-returns-table.webp"
                      alt="Slowball asset returns visual."
                      fill
                      sizes="(max-width: 900px) 100vw, 48vw"
                    />
                  </div>
                </div>
              ) : (
                <div className="item-grid">
                  {section.items.map((item) => (
                    <a
                      className="item-card"
                      href={item.href}
                      key={`${section.id}-${item.title}`}
                      {...buildAnchorProps(item.href)}
                    >
                      <div className="item-figure">
                        <Image
                          className="item-image"
                          src={buildCardArtwork(section, item)}
                          alt={`${item.title} card artwork`}
                          fill
                          sizes="(max-width: 620px) 100vw, (max-width: 1120px) 50vw, 25vw"
                          unoptimized
                        />
                        <span className="item-badge">{item.badge}</span>
                      </div>
                      <p className="item-meta">{item.meta}</p>
                      <h3>{item.title}</h3>
                      {item.note ? <p className="item-note">{item.note}</p> : null}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <h2>Contact</h2>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    className="contact-link"
                    href={link.href}
                    key={link.label}
                    {...buildAnchorProps(link.href)}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </section>

      <footer className="site-footer">
        <p>pabloaurelio.com</p>
        <p>Research, software, literature, investing, and technical diligence.</p>
      </footer>
    </main>
  );
}
