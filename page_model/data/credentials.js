require('dotenv').config()

const CREDENTIALS = {
  VALID_USER: {
    USERENAME: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD
  }
}

module.exports = CREDENTIALS