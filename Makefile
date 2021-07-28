UID := $(shell id -u)
GID := $(shell id -g)
DOCTUM_URL := "https://doctum.long-term.support/releases/latest/doctum.phar"
CONTAINER := "runitonce-php"

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
	docker exec -u www-data $(CONTAINER) cp .env.example .env
	docker exec -u www-data $(CONTAINER) composer install
	docker exec -u www-data $(CONTAINER) php artisan migrate:refresh --seed --force
	docker exec -u www-data $(CONTAINER) php artisan key:generate
	docker exec -u www-data $(CONTAINER) curl -O $(DOCTUM_URL)

doc:
	$(info Make: Generate application documentation.)
	docker exec -u www-data $(CONTAINER) php doctum.phar render doctum.config.php --force

test:
	$(info Make: Starting environment tests.)
	docker exec -u www-data $(CONTAINER) php artisan test --group runitonce

dusk:
	$(info Make: Starting environment dusk tests.)
	docker exec -u www-data $(CONTAINER) touch database/database.sqlite
	docker exec -u www-data $(CONTAINER) php artisan dusk

testall:
	$(info Make: Starting environment tests.)
	docker exec -u www-data $(CONTAINER) php artisan test
	docker exec -u www-data $(CONTAINER) php artisan dusk

shell:
	$(info Make: Starting environment shell.)
	docker exec -u www-data -it $(CONTAINER) sh

clean:
	@docker system prune --volumes --force
