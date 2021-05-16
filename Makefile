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
	docker-compose -f docker-compose.production.yml up --build --remove-orphans

prod-stop:
	docker-compose -f docker-compose.production.yml down --remove-orphans

SSH_STRING:=root@68.183.155.239

ssh:
	ssh ${SSH_STRING}

copy-files:
	scp -r ./* ${SSH_STRING}:/root/
