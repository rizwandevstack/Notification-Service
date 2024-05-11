<h1 style="text-align: center;">Notification Service</h1>


## Development environment

A development environment based on NodeJs is required and the version that is required to install dependencies : 20.12.2

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## Migrations setup

```bash
# create manual migration
$ npm run migration:create -n src/migrations/{migration-name}

# generate migration based on entity
$ npm run typeorm migration:generate -n src/migrations/{migration-name} -- -d ormconfig.ts

# run the migrations
$ npm run migration:run

# revert the migrations
$ npm run migration:revert
 ```

 ## Test

```bash
# unit tests
$ npm run test

# watch mode
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```