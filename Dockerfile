FROM node:16.17-alpine

WORKDIR /user/app

COPY package*.json ./

COPY . ./

RUN npm install
RUN npm run build

ENV PORT=3009

EXPOSE 3009

CMD ["npm", "start"]