FROM node:10-alpine

WORKDIR /api
COPY package.json package-lock.json /api/
RUN apk update && apk add python make && npm install --only=prod
COPY . /api