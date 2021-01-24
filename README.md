# TIN - Movies Database

### Requirements:
* Node.js
* Docker

### Installation

* `$ npm install`
* `$ cp .env-sample .env`
* `docker run --name tin-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=tin -p 5432:5432 -d postgres`
* `$ npm run cli teen:seed` 
* in two different terminals `$ npm start` and `$ npm start api`
