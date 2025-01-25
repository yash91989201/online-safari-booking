FROM node:lts

RUN git clone https://github.com/yash91989201/online-safari-booking.git

RUN bun install

RUN bun run db:migrate

ENTRYPOINT ["bun", "run", "db:studio"]
