#backend/Dockerfile

FROM node:12.19-alpine3.9

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "start"]
