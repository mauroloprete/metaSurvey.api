FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY . .

RUN ls

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]