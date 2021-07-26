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
Password: `password`

### User access

Username: `user@runitonce.com`
Password: `password`

Other users are automatically generated by seeder so you can retrieve the email from database connection
the password for all the seeder user is `password`

## Run the unit test

Type `make test` to run the unit test already present to the project

## Build documentation

## Known issue

- landing page improve
- add is_loading on show when ajax call must be finish
- notification system for some operations
- profile page should work also for other users
- user show is missed for user admin

- remove npm from docker file
- export postman collection
- laravel dusk test are missed