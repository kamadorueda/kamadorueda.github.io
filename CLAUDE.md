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

Deploying is done via the `deploy` app defined in `flake.nix`, which builds
the site and publishes `dist` to the `gh-pages` branch:
```bash
nix run .#deploy
```
(or run `deploy` directly if already inside the Nix dev shell)

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
