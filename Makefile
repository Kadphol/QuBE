start:
	docker-compose up -d

stop:
	docker-compose down

pause:
	docker-compose pause
resume:
	docker-compose unpause

prod-build:
	docker-compose -f docker-compose.production.yml build --no-cache

prod-start:
	docker compose -f docker-compose.production.yml up --build --remove-orphans
