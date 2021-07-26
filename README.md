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

Other users are available and generated via faker so you can retrieve the email from database connection

## Run the unit test

Type `make test` to run the unit test already present to the project

## Build documentation

## Known issue

- show someting when empty data on tables
- delete inside detail page is not redirect back to index
- notification system for some operations
- when deleting from page different than 1 we are render back the page 1 anyways
- profile page should work also for other users
- user show is missed for user admin
- remove npm from docker file
- export postman collection
- laravel dusk test are missed