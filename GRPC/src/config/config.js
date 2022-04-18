const PROTO_PATH = __dirname + "/tweet.proto";
const protoLoader = require("@grpc/proto-loader");


console.log(PROTO_PATH);

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const gRPCPackegeDefinition = protoLoader.loadSync(PROTO_PATH, options);

module.exports = gRPCPackegeDefinition