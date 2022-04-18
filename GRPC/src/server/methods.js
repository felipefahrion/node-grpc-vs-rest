const tweetsStub = require("../../stub/tweets.stub");

const TweetMethodsService = {
    getAll: (_, callback) => {
        callback(null, tweetsStub)
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
}

module.esxports = TweetMethodsService