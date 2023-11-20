FROM node:18.18.2-alpine3.18 AS build 

WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
RUN npm run build
 
FROM nginx:alpine3.18-slim AS stage2
 
COPY --from=build /app/dist/* /usr/share/nginx/html
 
EXPOSE 80
