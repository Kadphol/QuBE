var app = require('express')()
const config = require('./config/config');
var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.listen(config.APP_PORT);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

require('./passport.js')(app)  
require('./route.js')(app)
require('./simulator.js')(app)
