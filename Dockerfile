# Usando la imagen de alpine para utilizar version mas liviana de node
FROM node:current-alpine

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install

COPY . ./
EXPOSE 8080

CMD [ "npm", "start" ]