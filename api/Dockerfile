FROM node:19 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM node:19
COPY --from=build /app/package* /app/yarn.lock ./
RUN yarn install --production
COPY --from=build /app/dist .
EXPOSE 80
CMD ["node", "main.js"]