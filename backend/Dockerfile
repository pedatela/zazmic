FROM node:erbium-stretch

WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333

# POSTGRES
ENV DB_HOST=
ENV DB_USER=
ENV DB_PASSWORD=
ENV DB_NAME= 


CMD [ "npm", "start" ]
