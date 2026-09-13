# Project Documentation

## Tech Stack

- **Package Manager:** pnpm
- **Build Tool:** Astro
- **Styling:** Tailwind CSS
- **UI Framework:** React with TypeScript

## Quick Start

Install dependencies:
```bash
pnpm install
```

Run tests:
```bash
pnpm run test
```

Run linter:
```bash
pnpm run lint
```

Format code:
```bash
pnpm run format
```

## Development

The project uses Astro for development. To start the dev server:
```bash
pnpm run dev
```

The app will be available at `http://127.0.0.1:5173/`

## Deployment

The site is a Cloudflare Worker (static assets, same setup as `/data/coro`),
serving `kamadorueda.com` via a Workers Custom Domain. Credentials
(`CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_API_TOKEN`) are loaded automatically
by direnv from this repo's own sops-encrypted `secrets.yaml` (dual-encrypted
for this machine and Claude Cloud, see `.sops.yaml`) — no manual setup
needed.

```bash
nix run .#deploy-preview        # build + upload a preview version (dev-www.<subdomain>.workers.dev), no production traffic impact
nix run .#deploy                # build + deploy to production (kamadorueda.com)
```
(or run `deploy-preview` / `deploy` directly if already inside the Nix dev shell)

## PWA

The site is installable (manifest + service worker via `@vite-pwa/astro`,
same underlying `vite-plugin-pwa` engine as `/data/coro`). Its automatic
`<head>` injection doesn't fire on this project's Astro 6 static build, so
the manifest link, theme-color, and `registerSW.js` script are added by
hand in `src/components/Page/Html/index.astro`; `navigateFallback` is
disabled since this is a multi-page site, not an SPA. Icons are generated
from a hand-authored SVG monogram via `pnpm exec node scripts/generate-icons.mjs`
(re-run it if the palette in `src/index.css` changes).

## Project Structure

- `src/components/` - Reusable React components
- `src/views/` - Page-level components
- `src/thoughts/` - Individual thought/article pages
- `src/utils/` - Utility functions
- `src/index.tsx` - Application entry point

## Notes

- Tests are run with Vitest and include coverage reporting
- ESLint is configured with no warnings allowed
- The project uses TypeScript for type safety
