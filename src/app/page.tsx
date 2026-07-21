import {
  apps,
  featuredItems,
  focusAreas,
  navLinks,
  publications,
  readingRoom,
  softwareProjects,
  writingProjects
} from "@/data/site-content";

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <header className="site-header">
        <a className="brand" href="#top">
          pabloaurelio.com
        </a>
        <nav className="top-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Pablo Aurelio Gomez Garcia</p>
          <h1>
            Research, software, and writing organized into one clear body of
            work.
          </h1>
          <p className="hero-text">
            Microscopy and biophysics. Data and image analysis. Open-source
            tooling. Decision-support apps. Literary work. Technical diligence.
            One personal site, designed to make the range readable.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">
              Explore the work
            </a>
            <a className="button button-secondary" href="#resume">
              Resume and CV
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Current shape</p>
          <ul>
            <li>Scientific branch with publications and research snapshots</li>
            <li>Software portfolio spanning public repos and internal tools</li>
            <li>Personal Lab, Capital Lab, and Slowball-related products</li>
            <li>Fiction, essays, articles, and a future Reading Room</li>
          </ul>
        </aside>
      </section>

      <section className="focus-grid">
        {focusAreas.map((area) => (
          <a className="focus-card" href={area.href} key={area.title}>
            <p className="eyebrow">{area.eyebrow}</p>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </a>
        ))}
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="Selected Work"
          title="A homepage that can hold multiple disciplines without feeling busy."
          copy="Featured items work as cross-links between branches so the site feels unified rather than split into isolated careers."
        />
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <a className="featured-card" href={item.href} key={item.title}>
              <div className="meta-row">
                <span>{item.category}</span>
                <span>{item.year}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block" id="research">
        <SectionHeader
          eyebrow="Research"
          title="A publication shelf instead of a generic academic list."
          copy="The scientific branch should feel deliberate and visual. These cards can later evolve into image-led publication entries, either linking to Google Scholar or to dedicated article pages."
        />
        <div className="publication-grid">
          {publications.map((publication) => (
            <a className="publication-card" href={publication.href} key={publication.title}>
              <p className="publication-journal">
                {publication.journal} <span>{publication.year}</span>
              </p>
              <h3>{publication.title}</h3>
              <p className="publication-link">Open publication</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block" id="software">
        <SectionHeader
          eyebrow="Software"
          title="Tools and repositories with room to grow into full project pages."
          copy="The first version presents the software branch as compact cards. Later we can add case studies, screenshots, docs links, and technical notes."
        />
        <div className="card-grid">
          {softwareProjects.map((project) => (
            <a className="info-card" href={project.href} key={project.title}>
              <div className="meta-row">
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block dual-section" id="apps">
        <div>
          <SectionHeader
            eyebrow="Apps"
            title="Product work for thinking, research, and decision making."
            copy="Personal Lab and Capital Lab deserve their own branch because they are more than repositories: they are product ideas with interface, workflow, and philosophy."
          />
          <div className="card-grid compact-grid">
            {apps.map((app) => (
              <a className="info-card" href={app.href} key={app.title}>
                <div className="meta-row">
                  <span>{app.status}</span>
                </div>
                <h3>{app.title}</h3>
                <p>{app.blurb}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="slowball-panel" id="slowball">
          <p className="eyebrow">Slowball</p>
          <h2>Slowball can anchor the financial and long-horizon branch.</h2>
          <p>
            A dedicated space for the Slowball project, its philosophy, its
            tracker, and the surrounding tools can sit between software and
            analytical writing.
          </p>
          <ul className="detail-list">
            <li>Project overview and thesis</li>
            <li>Tracker and portfolio tooling</li>
            <li>Related essays and notes</li>
            <li>Bridge into Capital Lab</li>
          </ul>
        </div>
      </section>

      <section className="section-block dual-section" id="writing">
        <div>
          <SectionHeader
            eyebrow="Writing"
            title="A literary branch with enough quiet around it."
            copy="The writing section should not look like the software section. It needs a calmer tone and room for novels, short fiction, essays, and science communication."
          />
          <div className="card-grid compact-grid">
            {writingProjects.map((item) => (
              <a className="info-card writing-card" href={item.href} key={item.title}>
                <div className="meta-row">
                  <span>{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="consulting-panel" id="consulting">
          <p className="eyebrow">Consulting</p>
          <h2>Technical diligence and analytical support, framed with clarity.</h2>
          <p>
            This branch can present scientific, technical, and software-oriented
            diligence work in a direct, trust-heavy format aimed at serious
            clients.
          </p>
          <ul className="detail-list">
            <li>Technical diligence</li>
            <li>Research and product evaluation</li>
            <li>Scientific and analytical advisory</li>
            <li>Image, data, and software workflows</li>
          </ul>
        </div>
      </section>

      <section className="section-block" id="resume">
        <SectionHeader
          eyebrow="Resume"
          title="Use a concise public resume, with the academic CV available alongside it."
          copy="The short company-facing PDF is better for fast reading. The 2026 academic CV should remain available for research and institutional contexts."
        />
        <div className="resume-panel">
          <div>
            <h3>Recommended presentation</h3>
            <p>
              A web-native resume summary on the site, plus two downloads: a
              short resume and a full academic CV.
            </p>
          </div>
          <div className="resume-actions">
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

      <section className="section-block" id="reading-room">
        <SectionHeader
          eyebrow="Reading Room"
          title="A 4x5 catalog for books, essays, papers, and signal."
          copy="This section is scaffolded for a Netflix-like grid. Once you choose the first twenty items, we can replace the placeholders with covers and real destination links."
        />
        <div className="reading-grid">
          {readingRoom.map((entry, index) => (
            <a className="reading-card" href={entry.href} key={`${entry.title}-${index}`}>
              <div className="reading-cover">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="reading-copy">
                <p className="reading-kind">{entry.kind}</p>
                <h3>{entry.title}</h3>
                <p>{entry.creator}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
