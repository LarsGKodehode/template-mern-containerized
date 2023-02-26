FROM node:19 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html