# NOT DONE YET

FROM node:20-alpine3.18 AS prod

ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm ci

RUN npm install pm2 -g

CMD pm2 start && tail -f /dev/null

EXPOSE 3000