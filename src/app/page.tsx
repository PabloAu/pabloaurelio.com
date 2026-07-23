import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactForm } from "@/app/ContactForm";
import { SectionNav } from "@/app/SectionNav";
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

function buildGenericCardArtwork(
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

function buildSoftwareArtwork(
  section: (typeof gallerySections)[number],
  item: (typeof gallerySections)[number]["items"][number]
) {
  const title = item.title;
  const accent = section.accent;
  const ink = section.ink;
  const cardFrom = section.cardFrom;
  const cardTo = section.cardTo;

  const artByTitle: Record<string, string> = {
    CellRaQ: `
      <rect x="146" y="170" width="908" height="1160" rx="38" fill="${ink}" opacity="0.88" />
      <circle cx="600" cy="666" r="232" stroke="${accent}" stroke-width="16" opacity="0.92" />
      <circle cx="600" cy="666" r="132" stroke="${cardTo}" stroke-width="10" opacity="0.72" />
      <path d="M348 990C442 912 530 876 610 876C690 876 776 912 858 990" stroke="${cardTo}" stroke-width="14" stroke-linecap="round" />
      <path d="M600 422V298" stroke="${accent}" stroke-width="14" stroke-linecap="round" />
      <path d="M536 344H664" stroke="${accent}" stroke-width="14" stroke-linecap="round" />
      <circle cx="600" cy="666" r="38" fill="${accent}" />
    `,
    "Single-Molecule-Tracking-Analysis": `
      <rect x="124" y="160" width="952" height="1180" rx="40" fill="${ink}" opacity="0.9" />
      <path d="M220 1030C332 962 404 864 478 766C572 642 644 470 820 364" stroke="${accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="220" cy="1030" r="24" fill="${cardTo}" />
      <circle cx="478" cy="766" r="20" fill="${cardTo}" />
      <circle cx="820" cy="364" r="24" fill="${accent}" />
      <circle cx="980" cy="262" r="18" fill="${cardTo}" opacity="0.8" />
      <path d="M340 1160H964" stroke="${cardTo}" stroke-width="4" opacity="0.24" />
      <path d="M220 960L980 960" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
      <path d="M220 780L980 780" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
      <path d="M220 600L980 600" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
    `,
    "Two-Parameter-SMT": `
      <rect x="140" y="168" width="920" height="1164" rx="40" fill="${ink}" opacity="0.88" />
      <path d="M246 1050L246 330L960 330" stroke="${cardTo}" stroke-width="8" opacity="0.82" />
      <circle cx="410" cy="864" r="26" fill="${accent}" />
      <circle cx="538" cy="724" r="22" fill="${cardTo}" />
      <circle cx="704" cy="584" r="26" fill="${accent}" />
      <circle cx="820" cy="472" r="22" fill="${cardTo}" />
      <circle cx="910" cy="402" r="20" fill="${accent}" />
      <path d="M410 864L538 724L704 584L820 472L910 402" stroke="${accent}" stroke-width="10" stroke-linecap="round" opacity="0.78" />
      <rect x="846" y="864" width="102" height="102" rx="18" fill="${accent}" opacity="0.18" />
    `,
    "Excitation-multiplexed multicolor super-resolution imaging": `
      <rect x="120" y="156" width="960" height="1188" rx="40" fill="${ink}" opacity="0.9" />
      <circle cx="438" cy="628" r="212" fill="#5467D7" opacity="0.52" />
      <circle cx="716" cy="628" r="212" fill="#D75C7A" opacity="0.46" />
      <circle cx="578" cy="808" r="212" fill="#D8B35F" opacity="0.44" />
      <rect x="230" y="280" width="736" height="52" rx="26" fill="${cardTo}" opacity="0.12" />
      <rect x="230" y="986" width="736" height="52" rx="26" fill="${cardTo}" opacity="0.12" />
    `,
    SLOWBALL: `
      <rect x="122" y="160" width="956" height="1180" rx="42" fill="${ink}" opacity="0.9" />
      <path d="M214 1028C352 1014 500 992 642 936C782 878 922 780 1080 520" stroke="${accent}" stroke-width="18" stroke-linecap="round" />
      <path d="M214 1028C378 1016 548 1000 712 972C876 944 1000 890 1080 808" stroke="${cardTo}" stroke-width="12" stroke-linecap="round" opacity="0.66" />
      <path d="M214 1030L1080 1030" stroke="${cardTo}" stroke-width="4" opacity="0.22" />
      <path d="M214 824L1080 824" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
      <path d="M214 618L1080 618" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
      <path d="M214 412L1080 412" stroke="${cardTo}" stroke-width="2" opacity="0.18" />
    `,
    "Personal Lab": `
      <rect x="132" y="172" width="936" height="1160" rx="40" fill="${ink}" opacity="0.9" />
      <rect x="226" y="286" width="748" height="742" rx="28" fill="${cardTo}" opacity="0.1" />
      <rect x="286" y="362" width="260" height="260" rx="22" fill="${accent}" opacity="0.78" />
      <rect x="602" y="362" width="312" height="80" rx="16" fill="${cardTo}" opacity="0.82" />
      <rect x="602" y="478" width="248" height="20" rx="10" fill="${cardTo}" opacity="0.42" />
      <rect x="286" y="676" width="628" height="20" rx="10" fill="${cardTo}" opacity="0.42" />
      <rect x="286" y="736" width="540" height="20" rx="10" fill="${cardTo}" opacity="0.28" />
      <rect x="286" y="916" width="202" height="58" rx="16" fill="${accent}" opacity="0.88" />
    `,
    "Capital Lab": `
      <rect x="122" y="164" width="956" height="1172" rx="40" fill="${ink}" opacity="0.9" />
      <path d="M248 1030L248 324L986 324" stroke="${cardTo}" stroke-width="8" opacity="0.84" />
      <rect x="338" y="824" width="86" height="206" rx="16" fill="${cardTo}" opacity="0.34" />
      <rect x="492" y="730" width="86" height="300" rx="16" fill="${accent}" opacity="0.82" />
      <rect x="646" y="598" width="86" height="432" rx="16" fill="${cardTo}" opacity="0.48" />
      <rect x="800" y="422" width="86" height="608" rx="16" fill="${accent}" opacity="0.92" />
      <path d="M338 598C490 560 634 512 886 324" stroke="${accent}" stroke-width="10" stroke-linecap="round" opacity="0.72" />
    `,
    "Decision surfaces": `
      <rect x="132" y="164" width="936" height="1172" rx="40" fill="${ink}" opacity="0.9" />
      <path d="M234 926C330 828 430 816 540 900C648 982 760 976 876 878C948 816 1004 796 1060 824" stroke="${cardTo}" stroke-width="10" stroke-linecap="round" />
      <path d="M234 766C330 668 430 656 540 740C648 822 760 816 876 718C948 656 1004 636 1060 664" stroke="${accent}" stroke-width="12" stroke-linecap="round" />
      <path d="M234 606C330 508 430 496 540 580C648 662 760 656 876 558C948 496 1004 476 1060 504" stroke="${cardTo}" stroke-width="10" stroke-linecap="round" opacity="0.76" />
      <path d="M234 446C330 348 430 336 540 420C648 502 760 496 876 398C948 336 1004 316 1060 344" stroke="${accent}" stroke-width="12" stroke-linecap="round" opacity="0.92" />
    `
  };

  const art = artByTitle[title] ?? `
    <rect x="118" y="160" width="964" height="1180" rx="34" fill="${ink}" opacity="0.84" />
    <rect x="118" y="160" width="964" height="76" rx="34" fill="${accent}" opacity="0.26" />
    <rect x="180" y="310" width="520" height="18" rx="9" fill="${cardTo}" opacity="0.82" />
    <rect x="180" y="372" width="360" height="18" rx="9" fill="${cardTo}" opacity="0.54" />
    <rect x="180" y="434" width="620" height="18" rx="9" fill="${cardTo}" opacity="0.72" />
  `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
      <defs>
        <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${cardFrom}" />
          <stop offset="100%" stop-color="${cardTo}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="1500" fill="url(#wash)" />
      ${art}
      <text x="120" y="132" font-family="'Acid Grotesk', sans-serif" font-size="42" letter-spacing="9" fill="${ink}" opacity="0.68">${escapeSvgText(item.badge)}</text>
      <text x="120" y="1400" font-family="'Bastardo Grotesk', serif" font-size="112" fill="${ink}" opacity="0.88">${escapeSvgText(title.split(" ").slice(0, 2).join(" "))}</text>
      <text x="120" y="1452" font-family="'Acid Grotesk', sans-serif" font-size="34" letter-spacing="5" fill="${ink}" opacity="0.56">${escapeSvgText(item.meta)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getItemArtwork(
  section: (typeof gallerySections)[number],
  item: (typeof gallerySections)[number]["items"][number]
) {
  if (item.imageSrc) {
    return {
      src: item.imageSrc,
      alt: item.imageAlt ?? `${item.title} image`,
      fit: item.imageFit ?? "cover",
      unoptimized: false
    } as const;
  }

  if (section.id === "software") {
    return {
      src: buildSoftwareArtwork(section, item),
      alt: `${item.title} artwork`,
      fit: "cover" as const,
      unoptimized: true
    };
  }

  return {
    src: buildGenericCardArtwork(section, item),
    alt: `${item.title} artwork`,
    fit: "cover" as const,
    unoptimized: true
  };
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

      <SectionNav links={sectionNavLinks} />

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
                      src="/images/slowball/compound-interest-curves.svg"
                      alt="Compound interest curves for Slowball."
                      fill
                      sizes="(max-width: 900px) 100vw, 48vw"
                    />
                    <p className="slowball-panel-caption">
                      Compound growth calculator
                    </p>
                  </div>
                </div>
              ) : section.id === "consulting" ? (
                <div className="consulting-feature">
                  <div className="consulting-copy">
                    <p className="consulting-kicker">Technical diligence</p>
                    <h3>Scientific depth, product instinct, capital awareness.</h3>
                    <p>
                      I help investment teams, founders, and companies think
                      through experimental systems, imaging workflows, research
                      risk, software structure, and how technical detail
                      translates into product and capital decisions.
                    </p>
                    <p>
                      My background combines laboratory work, biophysics,
                      imaging, software building, and long-horizon investing,
                      which makes it possible to move between the scientific,
                      technical, and strategic layers of a project.
                    </p>
                  </div>

                  <div className="consulting-notes">
                    {section.items.map((item) => (
                      <div className="consulting-note" key={item.title}>
                        <span>{item.title}</span>
                        <p>{item.meta}</p>
                      </div>
                    ))}
                  </div>

                  <div className="client-band">
                    <p className="client-band-label">
                      Selected clients and projects
                    </p>
                    <div className="client-strip">
                      <span>Deep-tech funds</span>
                      <span>Research companies</span>
                      <span>Imaging systems</span>
                      <span>Case studies soon</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="item-grid">
                  {section.items.map((item) => {
                    const artwork = getItemArtwork(section, item);

                    return (
                      <a
                        className="item-card"
                        href={item.href}
                        key={`${section.id}-${item.title}`}
                        {...buildAnchorProps(item.href)}
                      >
                        <div
                          className={`item-figure${artwork.fit === "contain" ? " item-figure-journal" : ""}`}
                        >
                          <Image
                            className={`item-image${artwork.fit === "contain" ? " item-image-contain" : ""}`}
                            src={artwork.src}
                            alt={artwork.alt}
                            fill
                            sizes="(max-width: 620px) 100vw, (max-width: 1120px) 50vw, 25vw"
                            unoptimized={artwork.unoptimized}
                          />
                          <span className="item-badge">{item.badge}</span>
                        </div>
                        <p className="item-meta">{item.meta}</p>
                        <h3>{item.title}</h3>
                        {item.note ? <p className="item-note">{item.note}</p> : null}
                      </a>
                    );
                  })}
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
