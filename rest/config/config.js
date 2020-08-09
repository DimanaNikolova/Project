const env = process.env.NODE_ENV || "development";

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://user:user123@workshop.lrmp7.mongodb.net/Workshop?retryWrites=true&w=majority',
        cookie: "x-auth-token"
    },
    production: {}
};

module.exports = config[env];