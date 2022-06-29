#base image

# Dockerfile of any project is the file that stores the image definition.
# Has all the instructions required to build and start your application on a container

FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy fro to 
COPY ./ ./

RUN npm install --force
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
