FROM oven/bun as migrator

WORKDIR /app

COPY package.json ./

RUN bun install 

COPY . . 

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN echo "DATABASE_URL=${DATABASE_URL}" > .env

RUN bun run db:migrate

ENTRYPOINT ["bun", "run", "db:studio"]
