# Development Guidelines

## Project Overview
- Online Safari Booking platform powered by T3 Stack (Next.js, Drizzle ORM, tRPC, Tailwind CSS)
- Core modules: Booking, Pricing, User Management, API, Frontend UI

## Project Architecture
- Main directories: src/app, src/lib, src/styles, src/trpc, public
- src/app: Contains page and layout components for routing
- src/lib: Contains utilities, schema, types, and authentication logic
- src/styles: Contains global CSS (Tailwind)
- src/trpc: Contains API logic (server, client)
- public: Static assets (images, icons)

## Code Standards
- Use TypeScript and React best practices
- File, type, and variable naming must be camelCase or PascalCase, descriptive
- All functions, components, and modules must include English doc comments
- Enforce Prettier and ESLint formatting

## Functionality Implementation Standards
- When adding or modifying types in src/lib/types.ts, update all related files in src/app and src/trpc
- When updating API in src/trpc/server.ts, update corresponding usage in src/trpc/react.tsx
- When adding new feature in src/app, update README.md with usage notes if public-facing
- Recursively inspect all directories and files for related changes

## Framework/Plugin/Third-party Library Usage Standards
- Use only listed dependencies from package.json
- For new third-party libraries, update package.json and document usage in README.md
- Use Tailwind CSS for styling
- Use Drizzle ORM for database logic exclusively
- Use tRPC for API logic

## Workflow Standards
- Use dev script for local development (`npm run dev` or `bun run dev`)
- Use lint, format, and typecheck scripts before every commit
- For migrations, use drizzle-kit scripts and update drizzle.config.ts

## Key File Interaction Standards
- When modifying README.md, check for and update corresponding docs if present
- When updating global styles, ensure src/styles/globals.css is consistent with component styles
- When updating booking logic, ensure pricing table and booking form are updated together

## AI Decision-making Standards
- On ambiguous update requests, first analyze recent changes, shrimp-rules.md, and codebase
- List inferred update points and rationale before proposing changes
- Prioritize updating files with direct dependencies and cross-referenced usage
- Always use imperative rules for proposed actions

## Prohibited Actions
- Do not include general development knowledge or tutorials
- Do not explain project functionality
- Do not add unused dependencies or sample code
- Do not modify files outside listed directories unless instructed

## Examples
- Allowed: Update src/lib/types.ts and src/app/(main)/safari-booking/page.tsx together for type changes
- Allowed: Update API logic in src/trpc/server.ts and src/trpc/react.tsx together
- Forbidden: Add TypeScript tutorial or generic Next.js usage notes
- Forbidden: Update package.json with unused packages

## Update Mode Guidelines
- Make minimal changes to existing rules unless necessary
- Remove outdated rules if related code is deleted
- Add new rules when project structure or logic changes
- Always check all folders and files for completeness
- Never seek user clarification before autonomous analysis

**All rules must be followed strictly for every development and update task.**

