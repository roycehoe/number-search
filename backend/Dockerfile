FROM node:alpine as build-stage
WORKDIR "/app"
COPY ./package.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
ENV PROD_DB_URL={{secrets.PROD_DB_URL}}
ENV SECRET_KEY={{secrets.SECRET_KEY}}
CMD ["pnpm", "run", "deploy"]