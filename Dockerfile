FROM node:alpine
#This is node.js image
EXPOSE 1337
#Comment for node.js
WORKDIR /var/www
COPY package.json /var/www/
RUN npm install
COPY index.js /var/www/
