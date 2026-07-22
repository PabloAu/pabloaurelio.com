"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import {
  startTransition,
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useState
} from "react";
import type {
  AtlasCluster,
  AtlasClusterId,
  AtlasEdge,
  SectionLink
} from "@/data/site-content";

type ExperienceAtlasProps = {
  clusters: AtlasCluster[];
  edges: AtlasEdge[];
  hubHighlights: string[];
  sectionLinks: SectionLink[];
};

function getClusterIdFromHash(
  hash: string,
  clusters: AtlasCluster[]
): AtlasClusterId | null {
  const normalizedHash = hash.replace(/^#/, "");
  const match = clusters.find((cluster) => cluster.id === normalizedHash);

  return match?.id ?? null;
}

export function ExperienceAtlas({
  clusters,
  edges,
  hubHighlights,
  sectionLinks
}: ExperienceAtlasProps) {
  const defaultClusterId = clusters[0]?.id ?? "research";
  const [activeClusterId, setActiveClusterId] = useState<AtlasClusterId>(() => {
    if (typeof window === "undefined") {
      return defaultClusterId;
    }

    return getClusterIdFromHash(window.location.hash, clusters) ?? defaultClusterId;
  });
  const deferredClusterId = useDeferredValue(activeClusterId);

  const syncClusterFromHash = useEffectEvent(() => {
    const nextClusterId = getClusterIdFromHash(window.location.hash, clusters);

    if (nextClusterId) {
      setActiveClusterId((currentClusterId) =>
        currentClusterId === nextClusterId ? currentClusterId : nextClusterId
      );
    }
  });

  useEffect(() => {
    window.addEventListener("hashchange", syncClusterFromHash);

    return () => {
      window.removeEventListener("hashchange", syncClusterFromHash);
    };
  }, []);

  const activeCluster =
    clusters.find((cluster) => cluster.id === deferredClusterId) ?? clusters[0];

  const pointMap = Object.fromEntries(
    [
      ["hub", { x: 50, y: 51 }],
      ...clusters.map((cluster) => [cluster.id, cluster.position])
    ].map(([key, value]) => [key, value])
  ) as Record<AtlasClusterId | "hub", { x: number; y: number }>;

  function activateCluster(clusterId: AtlasClusterId) {
    if (clusterId === activeClusterId) {
      return;
    }

    startTransition(() => {
      setActiveClusterId(clusterId);
    });

    window.history.replaceState(null, "", `#${clusterId}`);
  }

  return (
    <section className="atlas-shell" id="atlas">
      <div className="atlas-overview">
        <p className="atlas-kicker">Interactive knowledge map</p>
        <h1>Click the clusters. Each branch opens its own working surface.</h1>
        <p className="atlas-summary">
          This redesign treats the homepage like a live graph rather than a
          static portfolio. Each node expands into research, software, apps,
          Slowball, writing, consulting, or the reading archive.
        </p>

        <div className="atlas-highlight-row">
          {hubHighlights.map((highlight) => (
            <span className="atlas-highlight-pill" key={highlight}>
              {highlight}
            </span>
          ))}
        </div>

        <nav className="atlas-section-nav" aria-label="Homepage sections">
          {sectionLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="atlas-layout">
        <div className="atlas-stage">
          <svg
            className="atlas-lines"
            viewBox="0 0 100 100"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            {edges.map((edge) => {
              const source = pointMap[edge.from];
              const target = pointMap[edge.to];
              const isActive =
                edge.to === activeCluster.id || edge.from === activeCluster.id;

              return (
                <line
                  className={isActive ? "is-active" : undefined}
                  key={`${edge.from}-${edge.to}`}
                  x1={source.x}
                  x2={target.x}
                  y1={source.y}
                  y2={target.y}
                />
              );
            })}
          </svg>

          <article className="hub-card">
            <div className="hub-media">
              <Image
                src="/images/pablo-hero-cajal-vintage.png"
                alt="Pablo Aurelio Gomez Garcia in a vintage study portrait."
                fill
                priority
                sizes="(max-width: 900px) 100vw, 380px"
              />
            </div>

            <div className="hub-copy">
              <p className="eyebrow">Pablo Aurelio Gomez Garcia</p>
              <h2>Research, software, literature, products, and capital.</h2>
              <p>
                A graph-like front door for the different systems, projects, and
                authored branches that make up your work.
              </p>
            </div>
          </article>

          {clusters.map((cluster) => {
            const isActive = cluster.id === activeCluster.id;

            return (
              <button
                aria-pressed={isActive}
                className={`atlas-node${isActive ? " is-active" : ""}`}
                key={cluster.id}
                onClick={() => activateCluster(cluster.id)}
                style={
                  {
                    "--node-color": cluster.color,
                    "--node-glow": cluster.glow,
                    "--node-surface": cluster.surface,
                    "--node-x": `${cluster.position.x}%`,
                    "--node-y": `${cluster.position.y}%`
                  } as CSSProperties
                }
                type="button"
              >
                <span className="atlas-node-label">{cluster.label}</span>
                <strong>{cluster.title}</strong>
                <p>{cluster.description}</p>
                <span className="atlas-node-meta">{cluster.stats[0]}</span>
              </button>
            );
          })}
        </div>

        <aside
          className="focus-panel"
          style={
            {
              "--focus-color": activeCluster.color,
              "--focus-glow": activeCluster.glow,
              "--focus-surface": activeCluster.surface
            } as CSSProperties
          }
        >
          <div className="focus-header">
            <p className="eyebrow">{activeCluster.label}</p>
            <h2>{activeCluster.title}</h2>
            <p>{activeCluster.note}</p>
          </div>

          <ul className="focus-stats">
            {activeCluster.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>

          <div className="focus-actions">
            {activeCluster.actions.map((action) => (
              <a
                className={`focus-action focus-action-${action.variant}`}
                href={action.href}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </div>

          <a className="focus-spotlight" href={activeCluster.spotlight.href}>
            <p className="focus-spotlight-eyebrow">
              {activeCluster.spotlight.eyebrow}
            </p>
            <h3>{activeCluster.spotlight.title}</h3>
            <p>{activeCluster.spotlight.copy}</p>
          </a>

          <div className="focus-grid">
            {activeCluster.items.map((item) => (
              <a className="focus-card" href={item.href} key={item.title}>
                <div className="focus-card-meta">
                  <span>{item.eyebrow}</span>
                  <span>{item.meta}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
