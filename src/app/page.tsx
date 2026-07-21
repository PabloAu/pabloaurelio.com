import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactForm } from "@/app/ContactForm";
import {
  apps,
  contactLinks,
  disciplineTracks,
  introParagraphs,
  navLinks,
  publications,
  readingRoom,
  resumePoints,
  softwareProjects,
  topLinks,
  writingProjects
} from "@/data/site-content";

function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

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

      <div className="content-column">
        <section className="hero-block" id="top">
          <figure className="hero-figure">
            <Image
              src="/images/pablo-hero-cajal-vintage.png"
              alt="Vintage portrait of Pablo Aurelio Gomez Garcia in a Cajal-inspired study with books, microscope, and computing references."
              width={1790}
              height={895}
              priority
            />
          </figure>

          <div className="intro-block">
            <p className="nameplate">Pablo Aurelio Gomez Garcia</p>
            <h1>Researcher, builder, writer, and long-horizon thinker.</h1>
            {introParagraphs.map((paragraph) => (
              <p className="intro-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <nav className="section-nav" aria-label="Internal sections">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        <section className="content-section" id="index">
          <SectionHeading
            eyebrow="Index"
            title="A clear map of the work."
            copy="The homepage now behaves more like a precise personal index: fewer boxes, more breathing room, and stronger hierarchy."
          />

          <div className="branch-list">
            {disciplineTracks.map((track) => (
              <a className="branch-row" href={track.href} key={track.title}>
                <div className="branch-meta">
                  <span>{track.eyebrow}</span>
                </div>
                <div className="branch-copy">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section" id="research">
          <SectionHeading
            eyebrow="Scientific branch"
            title="Selected publications and image-led research."
            copy="The scientific branch should feel serious, readable, and easy to extend later into dedicated paper pages, figures, notes, or research essays."
          />

          <div className="paper-list">
            {publications.map((publication) => (
              <a className="paper-row" href={publication.href} key={publication.title}>
                <div className="paper-meta">
                  <span>{publication.year}</span>
                  <span>{publication.journal}</span>
                </div>
                <h3>{publication.title}</h3>
              </a>
            ))}
          </div>

          <a
            className="inline-link"
            href="https://scholar.google.es/citations?user=wBn676IAAAAJ&hl=es"
          >
            View the full Google Scholar profile
          </a>
        </section>

        <section className="content-section" id="software">
          <SectionHeading
            eyebrow="Software and apps"
            title="Code, products, and Slowball systems."
            copy="Repositories, analytical tooling, and decision products belong in one branch, but still need distinct room for software, apps, and the Slowball project."
          />

          <div className="stack-list">
            {softwareProjects.map((project) => (
              <a className="stack-row" href={project.href} key={project.title}>
                <div className="stack-meta">
                  <span>{project.status}</span>
                </div>
                <div className="stack-copy">
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="subsection">
            <p className="subsection-label">Apps in development</p>
            <div className="stack-list">
              {apps.map((app) => (
                <a className="stack-row" href={app.href} key={app.title}>
                  <div className="stack-meta">
                    <span>{app.status}</span>
                  </div>
                  <div className="stack-copy">
                    <h3>{app.title}</h3>
                    <p>{app.blurb}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <article className="slowball-note">
            <p className="eyebrow">Slowball</p>
            <h3>A long-horizon branch with its own visual language.</h3>
            <p>
              Slowball links portfolio thinking, tracking tools, essays, and
              product work. It should read as a serious branch of the site, not
              as a side project.
            </p>
          </article>
        </section>

        <section className="content-section" id="writing">
          <SectionHeading
            eyebrow="Writing and consulting"
            title="Literature, essays, and analytical judgment."
            copy="This branch stays quieter and more authored than the software branch, while leaving space for fiction, essays, and technical diligence work."
          />

          <div className="stack-list">
            {writingProjects.map((project) => (
              <a className="stack-row" href={project.href} key={project.title}>
                <div className="stack-meta">
                  <span>{project.status}</span>
                </div>
                <div className="stack-copy">
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                </div>
              </a>
            ))}
          </div>

          <article className="consulting-note">
            <p className="subsection-label">Technical diligence</p>
            <p>
              Scientific, software, and product-oriented diligence work will
              live here too: careful evaluation, structured judgment, and clear
              synthesis for collaborators or clients.
            </p>
          </article>
        </section>

        <section className="content-section" id="resume">
          <SectionHeading
            eyebrow="Resume"
            title="A short public profile, plus the full CV."
            copy="The web version should stay concise. The fuller academic and company-facing versions can live as downloadable PDFs."
          />

          <div className="resume-panel">
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
          </div>
        </section>

        <section className="content-section" id="marginalia">
          <SectionHeading
            eyebrow="Marginalia"
            title="A shelf for books, papers, and essays worth revisiting."
            copy="The grid is already structured for twenty selections, so we can later swap the placeholders for your own catalogue without changing the layout."
          />

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
        </section>

        <section className="content-section contact-layout" id="contact">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="For research, software, writing, or diligence work."
              copy="The first version of the form stays static-safe by opening a prefilled email draft, while direct links remain available below."
            />

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
      </div>

      <footer className="site-footer">
        <p>Pablo Aurelio Gomez Garcia</p>
        <p>Science, software, writing, and long-horizon work.</p>
      </footer>
    </main>
  );
}
