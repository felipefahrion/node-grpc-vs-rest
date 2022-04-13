# node-grpc-vs-rest

## To run the application

```
npm run server
```

```
npm run client
```

## Ndoemom
Note: this application uses [nodemon](https://www.npmjs.com/package/nodemon)

## Performance

Test perfomance to this project and use this tool: https://dev.to/hiisi13/easy-ways-to-load-test-a-grpc-service-1dm3

Sample: 

```
ghz -c 100 -n 10000000 --insecure \
  --proto ./news.proto \
  --call NewsService.GetAllNews \
  -d '{}' \
  localhost:50051

```