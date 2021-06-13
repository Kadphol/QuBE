start:
	docker-compose up -d
build:
	docker-compose build --no-cache

stop:
	docker-compose down

pause:
	docker-compose pause
resume:
	docker-compose unpause
