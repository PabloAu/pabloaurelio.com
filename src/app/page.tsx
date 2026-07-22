import type { CSSProperties } from "react";
import { ContactForm } from "@/app/ContactForm";
import { ExperienceAtlas } from "@/app/ExperienceAtlas";
import {
  atlasClusters,
  atlasEdges,
  contactLinks,
  hubHighlights,
  readingRoom,
  resumePoints,
  sectionLinks,
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
      <header className="site-header">
        <div className="site-brand">
          <a className="site-name" href="#atlas">
            pabloaurelio
          </a>
          <p className="site-subtitle">
            Graph surfaces for science, software, writing, and patient systems.
          </p>
        </div>

        <nav className="utility-nav" aria-label="External links">
          {topLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <ExperienceAtlas
        clusters={atlasClusters}
        edges={atlasEdges}
        hubHighlights={hubHighlights}
        sectionLinks={sectionLinks}
      />

      <section className="support-grid">
        <article className="support-panel resume-panel" id="resume">
          <div className="panel-heading">
            <p className="eyebrow">Resume capsule</p>
            <h2>A concise public profile with room for deeper documents.</h2>
            <p>
              The public page stays selective. The full career detail can live
              in the downloadable CV formats while the graph handles discovery.
            </p>
          </div>

          <ul className="resume-list">
            {resumePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="button-row">
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

        <section className="support-panel contact-panel" id="contact">
          <div className="contact-copy">
            <div className="panel-heading">
              <p className="eyebrow">Contact dock</p>
              <h2>For collaborations, software, writing, or technical diligence.</h2>
              <p>
                The site now works like a more interactive front door, but the
                contact surface stays direct and practical.
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

          <ContactForm />
        </section>

        <article className="support-panel archive-panel" id="marginalia">
          <div className="panel-heading archive-heading">
            <p className="eyebrow">Marginalia wall</p>
            <h2>A mosaic archive for books, essays, papers, and future annotations.</h2>
            <p>
              The shelf stays visual and expandable, ready to become a more
              personal catalogue once you start curating the actual twenty
              entries.
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
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="reading-copy">
                  <p>{entry.kind}</p>
                  <h3>{entry.title}</h3>
                  <span>{entry.creator}</span>
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>

      <footer className="site-footer">
        <p>Pablo Aurelio Gomez Garcia</p>
        <p>Built as an interactive atlas rather than a conventional portfolio.</p>
      </footer>
    </main>
  );
}
