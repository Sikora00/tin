ARG NODE_VERSION=12.16.1
FROM node:${NODE_VERSION}-stretch as modules

WORKDIR /app

COPY angular.json nx.json package.json package-lock.json tsconfig.base.json ./
COPY ./libs ./libs
COPY ./apps ./apps

RUN npm ci
RUN npm run build
RUN npm run build api

FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY package.json package-lock.json ./
COPY --from=modules --chown=node /app/dist dist

RUN npm ci --prod

EXPOSE 3333

CMD node ./dist/apps/api/main.js
