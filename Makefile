start:
	docker-compose up -d --build --remove-orphans
build:
	docker-compose build --no-cache

stop:
	docker-compose down --remove-orphans

pause:
	docker-compose pause
resume:
	docker-compose unpause

prod-build:
	docker-compose -f docker-compose.production.yml build --no-cache

prod-start:
	docker-compose -f docker-compose.production.yml up --build --remove-orphans

prod-stop:
	docker-compose -f docker-compose.production.yml down --remove-orphans