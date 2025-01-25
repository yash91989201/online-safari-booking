FROM oven/bun

WORKDIR /app

COPY package.json ./

RUN bun run install 

COPY . . 

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN echo "DATABASE_URL=${DATABASE_URL}" > .env

RUN bun run db:migrate

ENTRYPOINT ["bun", "run", "db:studio"]
