FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY src/index.js index.js

EXPOSE 3000

CMD ["node", "index.js"]