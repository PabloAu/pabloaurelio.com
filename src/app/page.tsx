import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactForm } from "@/app/ContactForm";
import {
  contactLinks,
  gallerySections,
  heroMarkers,
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
                I am a senior scientist at ETH Zurich, working on imaging and
                biophysics. I write novels and short stories; economics taught
                me something about the world. I now help people manage wealth,
                advise companies on technology and investment, and spend my free
                time reading. Here I gather research, software, literature,
                consulting, and a few recommendations.
              </p>
            </div>
          </header>

          <div className="hero-pins" aria-label="Section markers">
            {heroMarkers.map((marker) => (
              <a
                className="hero-pin"
                href={marker.href}
                key={marker.label}
                style={
                  {
                    "--pin-x": `${marker.x}%`,
                    "--pin-y": `${marker.y}%`,
                    "--pin-tone": marker.tone
                  } as CSSProperties
                }
              >
                {marker.label}
              </a>
            ))}
          </div>

          <div className="hero-dock">
            <a className="hero-link" href="#research">
              Enter the study
            </a>
            <a className="hero-link" href="#contact">
              Write me
            </a>
          </div>

          <aside className="hero-quote">
            <p>&ldquo;{heroQuote.text}&rdquo;</p>
            <cite>
              <a href={heroQuote.sourceHref}>
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
            className="showcase-section"
            id={section.id}
            key={section.id}
            style={buildSectionStyles(section)}
          >
            <div className="showcase-inner">
              <div className="section-head">
                <h2>{section.label}</h2>
                {section.linkHref && section.linkLabel ? (
                  <a className="section-link" href={section.linkHref}>
                    {section.linkLabel}
                  </a>
                ) : null}
              </div>

              <div className={`item-grid item-grid-${section.layout}`}>
                {section.items.map((item) => (
                  <a
                    className={`item-card${item.featured ? " is-featured" : ""}`}
                    href={item.href}
                    key={`${section.id}-${item.title}`}
                  >
                    <div className="item-figure">
                      <span className="item-badge">{item.badge}</span>
                    </div>
                    <p className="item-meta">{item.meta}</p>
                    <h3>{item.title}</h3>
                    {item.note ? <p className="item-note">{item.note}</p> : null}
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <h2>Contact</h2>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a className="contact-link" href={link.href} key={link.label}>
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
        <p>Pablo Aurelio Gomez Garcia</p>
        <p>Science, software, literature, capital, and quiet systems.</p>
      </footer>
    </main>
  );
}
