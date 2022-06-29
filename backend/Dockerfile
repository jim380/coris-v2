FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy fro to 
COPY ./ ./

RUN npm install --force

EXPOSE 5000

CMD [ "node", "server.js" ]