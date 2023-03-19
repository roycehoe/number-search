# Introduction

A web application that searches the web for your telephone number.

# Getting started

## Backend

- Sign up and create an API key at [this website](https://app.abstractapi.com/api/phone-validation/tester)
- Go into the backend directory
- Install pnpm with npm
- Run `pnpm install` to install all packages
- Create a `.env` file and populate it with the following variables:
  - SECRET_KEY='{API_KEY_FROM_WEBSITE}'
  - DEV_DB_URL='mongodb://localhost:27017'
  - PROD_DB_URL= "mongodb://database"
  - DB_NAME='mongoPhoneNumber'
  - PORT='3000'

## Frontend

- Go into the frontend directory
- Install pnpm with npm (if you haven't already done so)
- Create a `.env` file and populate it with the following variables:
  - VUE_APP_BASE_URL=http://localhost:3000/

## Deployment

- Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
- Run the command `docker-compose build && docker-compose up` to build and starts all the project's containers
- View the application on `localhost:5137`
