FROM node:16-stretch
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js
