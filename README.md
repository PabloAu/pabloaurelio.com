# pabloaurelio.com

Personal website for Pablo Aurelio Gomez Garcia.

The first pass of this repo is organized around a clean, editorial, tech-forward portfolio built for:

- research and scientific publications
- software and open-source work
- product and app development
- Slowball and related projects
- novels, short stories, essays, and articles
- technical diligence and advisory work
- a concise web resume plus downloadable CVs
- a curated "Reading Room"

## Stack

- Next.js 16
- TypeScript
- App Router
- CSS with a small design system in `src/app/globals.css`

## Content Structure

- `src/data/site-content.ts`
  Holds the first-pass site content and section data.
- `docs/site-brief.md`
  Information architecture, style direction, and rollout plan.

## Deployment Plan

Recommended deployment flow:

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Connect `pabloaurelio.com` in Vercel.
4. Update DNS records at the domain registrar.
5. Let GitHub pushes trigger Vercel deployments automatically.

## Current Notes

- The repo was initially empty, so this scaffold is intentionally content-first.
- The short company resume works best as the primary downloadable resume.
- The 2026 academic CV should also be available as a separate long-form document.
- GitHub CLI and Vercel CLI are not installed in this environment yet, so push/deploy still need access setup.
