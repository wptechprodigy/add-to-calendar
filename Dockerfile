# stage1 as builder
FROM node:10-alpine as builder

# copy the package.json to install dependencies
COPY package*.json ./
COPY yarn.lock ./

# Install the dependencies and make the folder
RUN yarn && mkdir /add-to-calendar && mv ./node_modules ./add-to-calendar

WORKDIR /add-to-calendar

COPY . .

# Build the project and copy the files
RUN yarn build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /add-to-calendar/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
