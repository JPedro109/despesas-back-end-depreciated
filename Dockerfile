FROM node:alpine

WORKDIR /api-despesas

COPY package.json .

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]