UID := $(shell id -u)
GID := $(shell id -g)

build:
	$(info Make: Building environment image.)
	UID=$(UID) GID=$(GID) docker-compose build --no-cache
	@make -s clean
 
start:
	$(info Make: Starting environment containers.)
	UID=$(UID) GID=$(GID) docker-compose up -d

stop:
	$(info Make: Stopping environment containers.)
	@docker-compose stop
 
restart:
	$(info Make: Restarting environment containers.)
	@make -s stop
	@make -s start

init:
	$(info Make: Initializing environment.)
	docker exec -u www-data runitonce-php cp .env.example .env
	docker exec -u www-data runitonce-php composer install
	docker exec -u www-data runitonce-php php artisan migrate:refresh --seed
	docker exec -u www-data runitonce-php php artisan key:generate

test:
	$(info Make: Starting environment tests.)
	docker exec -u www-data runitonce-php php artisan test

push:
	$(info Make: Pushing tagged image.)
	@docker push runitonce:latest
 
pull:
	$(info Make: Pulling latest tagged image.)
	@docker pull runitonce:latest
 
clean:
	@docker system prune --volumes --force
 
login:
	$(info Make: Login to Docker Hub.)
	@docker login -u $(DOCKER_USER) -p $(DOCKER_PASS)