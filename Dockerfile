FROM node:18-alpine as base

WORKDIR /app

COPY package*.json ./

COPY ./src /app/src

COPY ./public /app/public

COPY ./next.config.js /app/next.config.js

COPY ./tsconfig.json /app/tsconfig.json

RUN npm install