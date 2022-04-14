const grpc = require("@grpc/grpc-js")
const gRPCPackegeDefinition = require('../config/config.js')

const tweetProto = grpc.loadPackageDefinition(gRPCPackegeDefinition);

const server = new grpc.Server();

server.addService(tweetProto.TweetService.service, {
  getAll: (_, callback) => {
    callback(null, { message: "Method not implemented" })
  },
  create: (_, callback) => {
    callback(null, { message: "Method not implemented" })
  },
  update: (_, callback) => {
    callback(null, { message: "Method not implemented" })
  },
  delete: (_, callback) => {
    callback(null, { message: "Method not implemented" })
  },
  getById: (_, callback) => {
    callback(null, { message: "Method not implemented" })
  }
});

server.bindAsync(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at localhost:50051");
    server.start();
  }
);