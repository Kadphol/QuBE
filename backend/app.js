var app = require('express')()
const config = require('./config/config');

app.listen(config.APP_PORT);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
}); 

require('./passport.js')(app)  
require('./route.js')(app)
