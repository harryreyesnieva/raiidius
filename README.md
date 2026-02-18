# RAIIDIUS Website (Astro + Tailwind)

This is a GitHub Pages–friendly, static website for the **RAIIDIUS** annual symposium series, with edition-specific routes:

- `/2026/…` (active edition)
- `/2027/…` (placeholder / coming soon)

Canonical routes (e.g., `/program`, `/speakers`) redirect to the last selected edition (stored in `localStorage`), defaulting to 2026.

## Edit content
Single source of truth:

- `src/content/siteConfig.ts` (series + editions + agenda + speakers + partners + links)
- `src/content/types.ts` (TypeScript types)

## Local development
```bash
npm install
npm run dev
```

## Build (static export)
```bash
npm run build
```
Output: `dist/`

## GitHub Pages deploy
This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. In GitHub: **Settings → Pages**
2. Set **Build and deployment** to **GitHub Actions**
3. Push to `main`

### Base path / project sites
The Astro config automatically sets the `base` path in CI to `/<repo-name>` using `GITHUB_REPOSITORY`.
Locally, the base path is empty.

## Notes on npm audit
If you see audit warnings after install, you can try:
```bash
npm audit fix
```
Avoid `--force` unless you understand the breaking changes.
