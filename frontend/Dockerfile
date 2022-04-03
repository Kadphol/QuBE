#frontend/Dockerfile

FROM node:12.19-alpine3.9

WORKDIR /app

COPY package.json ./ 

COPY yarn.lock ./

RUN yarn install --frozen-lock

COPY . ./

CMD ["yarn", "start"]
