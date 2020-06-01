FROM node:14

WORKDIR /user/apiTasklist

COPY package*.json ./

RUN npm i -f

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]