FROM oven/bun 

RUN bun install

RUN bun run db:migrate

ENTRYPOINT ["bun", "run", "db:studio"]
