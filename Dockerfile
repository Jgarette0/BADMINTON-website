FROM node:20.6.1-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4173

CMD ["npm", "run", "preview"]
