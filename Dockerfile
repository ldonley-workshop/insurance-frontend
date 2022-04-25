FROM node:14-alpine as BUILDER
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx
COPY variableReplace.sh /docker-entrypoint.d/
COPY --from=BUILDER /app/dist /usr/share/nginx/html
COPY .env /usr/share/nginx/html

