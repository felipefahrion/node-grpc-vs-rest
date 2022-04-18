const grpc = require("@grpc/grpc-js")
const gRPCPackegeDefinition = require('../config/config.js');
const TweetMethodsService = require("./methods")

const tweetProto = grpc.loadPackageDefinition(gRPCPackegeDefinition);

const server = new grpc.Server();

server.addService(tweetProto.TweetService.service, TweetMethodsService);

server.bindAsync(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at localhost:50051");
    server.start();
  }
);