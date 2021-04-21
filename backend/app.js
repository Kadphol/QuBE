const express = require('express');
const config = require('./config/config');
const session = require('express-session');
const cookieParser = require('cookie-parser');

var app = express();
app.listen(config.APP_PORT);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.ENDPOINT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

require('./passport.js')(app)  
require('./route.js')(app)
require('./simulator.js')(app)
