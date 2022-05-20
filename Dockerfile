#base image

# Dockerfile of any project is the file that stores the image definition.
# Has all the instructions required to build and start your application on a container

FROM node:16-alpine AS BUILD_IMAGE
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY ./ ./
RUN npm install
RUN npm run build
RUN rm -rf node_modules
RUN npm install --production

FROM node:16-alpine
ENV NODE_ENV production
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/app/package.json ./
COPY --from=BUILD_IMAGE /usr/app/package-lock.json ./
COPY --from=BUILD_IMAGE /usr/app/public ./public
COPY --from=BUILD_IMAGE /usr/app/.next ./.next
EXPOSE 3000
CMD [ "npm", "start" ]
