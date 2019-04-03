const dotenv = require('dotenv');

dotenv.config();
if (process.env)
module.exports = {
    TELEGRAM_API : process.env.TELEGRAM_API,
    GOOGLE_API : process.env.GOOGLE_API,
    Username : process.env.USERNAME,
    Password : process.env.PASSWORD
}