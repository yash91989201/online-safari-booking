FROM node:lts

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . . 

RUN npm run db:migrate

ENTRYPOINT ["npm", "run", "db:studio"]
