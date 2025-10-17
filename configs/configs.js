require('@dotenvx/dotenvx').config()

const dotenvx = {

    port : process.env.PORT,
    mongo_url : process.env.MONGO_URL,
    secret_key : process.env.SECRET_KEY

}

module.exports = dotenvx