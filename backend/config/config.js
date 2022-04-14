require('dotenv').config({ path: __dirname + '../.env' });

const prod = {
  URL: `${process.env.CLIENT_URL}:${process.env.APP_PORT}`,
  FRONTEND_URL: `${process.env.CLIENT_URL}:${process.env.APP_PORT}`
};

const dev = {
  URL: 'http://localhost',
  URL_404: 'http://localhost/404',
  FRONTEND_URL: 'http://localhost:3000'
};

module.exports = {
  DB: process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017/qube',
  APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : '80',
  ENDPOINT: process.env.NODE_ENV === 'production' ? prod : dev,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECERT: process.env.CLIENT_SECRET
};