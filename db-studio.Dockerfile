FROM oven/bun

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . . 

RUN bun run db:migrate

ENTRYPOINT ["bun", "run", "db:studio"]
