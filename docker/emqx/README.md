# Assignment 3

## Requirement
- Viết docker compose để deploy 1 container của emqx, có cấu hình user name và password cho emqx

## Result

### Run service

```bash
docker-compose -f docker-compose.yml up -d
```
- Access -> server_name:18083
  - username: admin
  - password: public

### Test on MQTTBox -> ok