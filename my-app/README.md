# Assignment 4

## Requirement
1. Viết 1 API cơ bản (có thể dùng ngôn ngữ gì tùy ý, khuyến khích dùng .Net core), sao cho khi chạy, truy cập vào đường dẫn API (vd localhost:8080/api/hello) hiển thị dòng chữ: "Xin chào API"
2. Viết docker file để build image chương trình trên.
3. Push docker image lên docker hub.
4. Trên máy chủ EC2, pull docker image này về và chạy trên máy chủ, tạo sub domain, cấu hình nginx proxy để trỏ tới service này, sao cho khi truy cập với domain đã tạo ở bài trước (vd: https://api.domain.xyz/api/hello) thì hiển thị dòng chữ "Xin chào API"
## Result

### Build Docker Image

```bash
docker build -t thobui2105/demo-api:v1 .
```

### Push Docker Image to Docker Hub

```bash
docker push thobui2105/demo-api:v1
```
### Create Subdomain
`api.thobt.online`

### Run services

```bash
docker-compose -f docker-compose.yml up -d
```

### Access to URL

`api.thobt.online/api/hello`