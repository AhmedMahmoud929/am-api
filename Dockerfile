FROM node:18

WORKDIR /api-server

EXPOSE 2502

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "node" , "index.js" ]