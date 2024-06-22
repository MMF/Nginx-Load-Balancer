# Nginx Load Balancer
Building a Simple Load Balancer with Nginx and Node.

Build node application image
```
docker build -t node_app:latest ./node_app
```

Run node application server 1
```
docker run -d -p 3001:3000 --name node_app_1 -e SERVER_NAME=NodeApp1 node_app:latest
```

Run node application server 2
```
docker run -d -p 3002:3000 --name node_app_2 -e SERVER_NAME=NodeApp2 node_app:latest
```

Build Nginx image
```
docker build -t nginx_lb ./nginx_server
```

Run Nginx Load Balancer Container
```
docker run -d -p 8080:80 --name nginx_lb --link node_app_1 --link node_app_2 nginx_lb:latest
```
