# Run it once assestement test

## Preface

I know I can use `Laravel Sancutm` or `Laravel Passport` to authenticate the user and I can use `Laravel Sail`
to manage the docker environment but due to the test I did everything from scratch.

## Requirements

    - Docker
    - Docker Compose
    - Make

## Installation

1. Type `make build` to build the docker image
2. Type `make start` to start the docker containers
3. Type `make init` to initialize the application container (only the first time is requried)

## Testing the application

Access the address `http://localhost:8000` from your browser.
The step number 3 will ensure that fake data is present on the db in order to test the application

### Super admin access

Username: `admin@runitonce.com`
Password: `12345678`

### User access

Username: `user@runitonce.com`
Password: `12345678`


## Run the unit test

Type `make test` to run the unit test already present to the project

## Build documentation

- profile page should work also for other users
- notification system for some operations