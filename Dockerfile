FROM node:lts AS base

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . . 

RUN npm run build

FROM node:22-alpine AS final

WORKDIR /app

COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
