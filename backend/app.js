const express = require('express');
const config = require('./config/config');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

var app = express();
app.listen(config.APP_PORT);

app.use(compression());
app.use(morgan('tiny'));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.ENDPOINT.URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ 
  secret: 'keyboard cat', 
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  resave: true, 
  saveUninitialized: true 
}));

require('./passport.js')(app)  
require('./route.js')(app)
require('./simulator.js')(app)
require('./avaliable.js')(app)

if(process.env.NODE_ENV === 'production') {
  //Serve any static files
  app.use(express.static(path.join(__dirname,'../frontend/build')));

  //Handle React routing, return all request to React ap
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}
