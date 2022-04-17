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
  const allowedOrigins = [config.ENDPOINT.FRONTEND_URL, config.ENDPOINT.URL];
  const origin = req.headers.origin;
  if(allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Cache-Control', 'max-age=86400000');
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
const route = require('./route.js');
const sim = require('./simulator.js');
const available = require('./available.js');
app.use('/api', route);
app.use('/api/sim', sim);
app.use('/api/available', available);

if(process.env.NODE_ENV === 'production') {
  //Serve any static files
  app.use(express.static(path.join(__dirname,'../frontend/build'), {maxAge: '86400000'}));

  //Handle React routing, return all request to React ap
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}
