require('dotenv').config({path: '../.env'});
const prod = {
  URL: process.env.CLIENT_URL
};

const dev = {
  URL: 'http://localhost:3000',
};

module.exports = {
  DB: process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017/qube',
  APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : '80',
  ENDPOINT: process.env.NODE_ENV === 'production' ? prod : dev,
  CLIENT_ID: process.env.CLIENT_ID,
  CLEINT_SECERT: process.env.CLEINT_SECERT
};