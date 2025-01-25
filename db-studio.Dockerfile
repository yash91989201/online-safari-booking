FROM node:lts

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . . 

ARG DATABASE_URL
ARG NEXT_PUBLIC_SITE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

RUN echo "DATABASE_URL=${DATABASE_URL}" >> .env \
  echo "NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}" >> .env

RUN npm run db:migrate

ENTRYPOINT ["npm", "run", "db:studio"]
