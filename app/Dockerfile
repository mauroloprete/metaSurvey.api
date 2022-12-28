FROM node:16

RUN mkdir -p /usr/src/

WORKDIR /usr/src/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]