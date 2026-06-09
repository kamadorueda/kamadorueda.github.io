# Project Documentation

## Tech Stack

- **Package Manager:** pnpm
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Framework:** React with TypeScript

## Quick Start

Install dependencies:
```bash
pnpm install
```

Run tests:
```bash
npm run test
```

Run linter:
```bash
npm run lint
```

Format code:
```bash
npm run format
```

## Development

The project uses Vite for development. To start the dev server:
```bash
npx vite --host 127.0.0.1
```

The app will be available at `http://127.0.0.1:5173/`

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
