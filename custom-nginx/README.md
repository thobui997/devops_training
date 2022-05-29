# Assignment 1

## Requirement
1. Viết dockerfile để tạo 1 custom image của nginx.
2. Thay đổi nội dung của file html trong thư mục html bằng tên của mình
3. Deploy container lên host, map cổng 80, 443 của container với cổng 80, 443 của host

## Result

### Build Docker Images

```bash
docker build -t thobui2105/custom-nginx:v1 .
```

### Run Docker Container from Image 

```bash
docker run -it --rm --name custom-nginx -v /etc/letsencrypt:/etc/letsencrypt:ro -p 80:80 -p 443:443 -d thobui2105/custom-nginx:v1
```

