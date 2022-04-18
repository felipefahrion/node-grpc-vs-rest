const accountInformationStub = {
    email: '',
    has_phone_number: false
}

const userMentionsStub = {
    id: 0000,
    name: '',
    screenName: '',
    followersCont: 0,
    verified: false,
    accountInformation: accountInformationStub
}

const userStub = {
    id: 0000,
    id_str: '',
    name: '',
    screenName: '',
    location: '',
    description: '',
    url: '',
    followersCount: 0,
    friends_count: 0,
    listedCount: 0,
    favouritesCount: 0,
    createdAt: '',
    utc_offset: 0,
    timeZone: '',
    verified: false,
    accountInformation: accountInformationStub
}

const tweetResponseStub = {
    createedAt: '',
    id: 00000,
    text: '',
    entities: {
        userMentions: [
            userMentionsStub,
            userMentionsStub,
            userMentionsStub,
        ]
    },
    user: userStub
}

module.exports = tweetResponseStub