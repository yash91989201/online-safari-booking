CRUSH.md — Commands & Style Guide for agents

Commands (use your package manager: npm|pnpm|bun run <script>)

- Dev: dev | Build: build | Start: start | Preview: preview
- Lint: lint | Fix: lint:fix | Typecheck: typecheck | All: check
- Format: format:check | format:write (Prettier + Tailwind plugin)
- DB (Drizzle): db:generate | db:migrate | db:push | db:studio
- Tests: none configured. If adding Vitest: vitest path/to/file.test.ts -t "name"
  Environment
- Required: DATABASE_URL (see .env.example). Validated by @t3-oss/env-nextjs; use SKIP_ENV_VALIDATION in Docker.
- Start Postgres: docker compose up -d
  Imports & Modules
- Prefer type-only imports (inline): import { type X } from "..."; order external -> @/_-> relative; use alias @/_.
  TypeScript
- Strict + noUncheckedIndexedAccess; derive types from Zod with z.infer; export explicit types at module boundaries.
  Naming & Structure
- camelCase (vars/fns), PascalCase (components/types), kebab-case for route dirs; use cn from src/lib/utils for class merging.
  Error Handling & Async
- Validate with zod; use TRPCError for domain errors; no plain strings; obey no-misused-promises and await async calls.
  Database (Drizzle)
- eslint-plugin-drizzle enforces WHERE on update/delete; always include .where(...); prefer explicit selects.
  Formatting
- Prettier + prettier-plugin-tailwindcss orders class names; keep imports tidy; prefix \_ for intentionally unused args.
  Notes
- No Cursor (.cursor/rules, .cursorrules) or Copilot rules found.
