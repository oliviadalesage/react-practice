# React practice

A minimal JavaScript React starter for our next coding session.

## Getting started

Use Node.js 24 LTS (see `.nvmrc`) and npm 11.21.1 or newer.

```sh
nvm use
npm ci
npm run dev
```

If you do not use nvm, install Node.js 24 directly and skip `nvm use`.
Open the local URL printed by Vite. Edit [src/App.jsx](src/App.jsx) to begin.

## Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the development server                  |
| `npm test`             | Run Jest tests                                |
| `npm run test:watch`   | Run tests in watch mode                       |
| `npm run lint`         | Check JavaScript and JSX with ESLint/Airbnb   |
| `npm run format`       | Format files with Prettier                    |
| `npm run format:check` | Check formatting without changing files       |
| `npm run build`        | Create the production build in `dist/`        |
| `npm run preview`      | Preview the production build locally          |
| `npm run check`        | Run lint, formatting checks, tests, and build |

## Included

- React 18 and Vite.
- Jest, React Testing Library, jest-dom, and user-event.
- ESLint with `eslint-config-airbnb` and its React Hooks rules.
- Prettier and `eslint-config-prettier` to avoid formatting conflicts.
- [Sage Carbon](https://carbon.sage.com/) (`carbon-react`), its theme provider,
  global styles, fonts, and required peer dependencies.

The starter renders a Carbon button. Its small interaction test demonstrates
React Testing Library and user-event against the real component.

## Compatibility notes

Carbon currently requires React 17 or 18, so this project uses React 18.
Airbnb's published configuration requires ESLint 7 or 8, so this project uses
ESLint 8, which is deprecated upstream. The JSX runtime does not need a React
import, and named components use function declarations; those two rules are
configured explicitly. Prettier owns formatting.

The import resolver supports modern package exports in this JavaScript project.
Vite's aliases select Carbon's ES modules for the browser and handle its
Webpack-style `~@sage/design-tokens` font URLs. Jest uses Carbon's CommonJS build.

Some upstream dependencies currently have npm audit advisories. Review them with
`npm audit` before deployment; do not use `npm audit fix --force` blindly, as its
suggested major-version changes can break the requested toolchain.

This is a private learning repository under `oliviadalesage`, not a Sage
organization repository. The Carbon package itself is publicly available.
