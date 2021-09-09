FROM node:16-stretch
WORKDIR /app
ADD package*.json .
RUN npm install
ADD . .
CMD node index.js
