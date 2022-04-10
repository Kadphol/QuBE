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
