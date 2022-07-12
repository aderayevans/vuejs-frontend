
# syntax=docker/dockerfile:1
FROM node:latest
WORKDIR /code
RUN npm i --location=global vue-cli
RUN npm i --location=global axios
RUN npm i --location=global serve

RUN npm install --save bootstrap
RUN npm install --save @popperjs/core 
RUN npm install --save jquery

# RUN npm install bootstrap@4.6.0 --save --legacy-peer-deps
COPY . /code/

# EXPOSE 8080
# CMD [ "serve", "-s" , "dist" , "-l" , "8080" ]