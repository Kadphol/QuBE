#frontend/Dockerfile

FROM node:12.19-alpine3.9

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "start"]
