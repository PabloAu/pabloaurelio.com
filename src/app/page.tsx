import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactForm } from "@/app/ContactForm";
import {
  contactLinks,
  heroMarkers,
  practiceSections,
  readingRoom,
  resumePoints,
  topLinks
} from "@/data/site-content";

const shelfTones = [
  "var(--cover-tone-1)",
  "var(--cover-tone-2)",
  "var(--cover-tone-3)",
  "var(--cover-tone-4)",
  "var(--cover-tone-5)"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-shell" id="top">
        <div className="hero-stage">
          <Image
            className="hero-image"
            src="/images/pablo-hero-cajal-vintage.png"
            alt="Pablo Aurelio Gomez Garcia in a vintage study portrait."
            fill
            priority
            sizes="100vw"
          />

          <div className="hero-patina" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <header className="site-header">
            <a className="site-name" href="#top">
              pabloaurelio
            </a>

            <nav className="utility-nav" aria-label="External links">
              {topLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
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
            <a className="button button-primary" href="#research">
              Enter the study
            </a>
            <a className="button button-secondary" href="#contact">
              Write to Pablo
            </a>
          </div>
        </div>
      </section>

      <section className="study-shell">
        {practiceSections.map((section) => (
          <article
            className="practice-section"
            id={section.id}
            key={section.id}
            style={
              {
                "--section-tint": section.tint
              } as CSSProperties
            }
          >
            <div className="practice-heading">
              <p className="eyebrow">{section.label}</p>
              <h2>{section.title}</h2>
            </div>

            <div className="practice-body">
              <p className="practice-summary">{section.summary}</p>
              <p className="practice-text">{section.body}</p>

              <ul className="practice-highlights">
                {section.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="practice-actions">
                {section.actions.map((action) => (
                  <a className="section-action" href={action.href} key={action.label}>
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}

        <article className="reading-section" id="marginalia">
          <div className="section-intro">
            <p className="eyebrow">Marginalia</p>
            <h2>A shelf for books, essays, papers, and old companions.</h2>
            <p>
              This stays visual and quiet. It can later become a more personal
              archive, but it already reads like a room with references rather
              than a list of links.
            </p>
          </div>

          <div className="reading-grid">
            {readingRoom.map((entry, index) => (
              <a
                className="reading-card"
                href={entry.href}
                key={`${entry.title}-${entry.kind}`}
                style={
                  {
                    "--cover-tone": shelfTones[index % shelfTones.length]
                  } as CSSProperties
                }
              >
                <div className="reading-cover">
                  <p>{entry.kind}</p>
                  <h3>{entry.title}</h3>
                </div>
                <span>{entry.creator}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="resume-section" id="resume">
          <div className="section-intro">
            <p className="eyebrow">CV</p>
            <h2>A short public record and a longer academic version.</h2>
            <p>
              The site can stay selective while the formal documents carry the
              full chronology.
            </p>
          </div>

          <ul className="resume-list">
            {resumePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="button button-primary" href="/documents/pablo-aurelio-resume.pdf">
              Download short resume
            </a>
            <a
              className="button button-secondary"
              href="/documents/pablo-aurelio-academic-cv-2026.pdf"
            >
              Download academic CV
            </a>
          </div>
        </article>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <div className="section-intro contact-intro">
              <p className="eyebrow">Contact</p>
              <h2>For collaborations, software, writing, diligence, or research.</h2>
              <p>
                This section stays simple. The rest of the page can be more
                atmospheric, but reaching you should remain direct.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a className="contact-link" href={link.href} key={link.label}>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-shell">
            <p className="eyebrow">Write directly</p>
            <ContactForm />
          </div>
        </section>
      </section>

      <footer className="site-footer">
        <p>Pablo Aurelio Gomez Garcia</p>
        <p>A vintage study for science, software, writing, and patient systems.</p>
      </footer>
    </main>
  );
}
