FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]