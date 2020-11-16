var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = require('express')()
var uuid = require('uuid').v4
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy
var DummyStrategy = require('passport-dummy').Strategy

var CLIENT_ID = '406602993675033'
var CLIENT_SECRET = 'ad29d0665bde6cd353d86ce0fff1094e'
const config = require('./config/config');
const users = require('./db/users.js')

app.listen(config.APP_PORT);

passport.serializeUser(function(user, done) {
  done(null, user);
})
passport.deserializeUser(function(obj, done) {
  done(null, obj);
})
passport.use(new FacebookStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost/login/callback",
    profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
    data = new users({
        id:profile.id,
        type:"Facebook",
        name:profile.displayName,
        image:profile.photos[0].value
    })
    users.addnew(data,function(err){if(err) throw err})
    done(null, profile)
  }
))
passport.use(new DummyStrategy(  
  (done)=>{
  genid = uuid()
  data = new users({
    id:genid,
    type:"Guest",
    name:"Guest-"+genid.slice(0,7),
    image:"https://i.pinimg.com/564x/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.jpg"
  })
  users.addnew(data,function(err){if(err) throw err})
  return done(null,{id:data.id})
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
       res.send(200);
   } else {
       next();
   }
  });

app.get('/',(req,res)=>{
  res.send('Backend')
})

app.get('/fetch', (req, res) => {
  if(req.isAuthenticated()){
    users.fetch(req.user.id,function(err,data){
      console.log("FETCH",data)
      if(err) throw err
      return res.send(data)
    })
  }
})

app.get('/login', passport.authenticate('facebook'))
app.get('/login/callback',
  passport.authenticate('facebook', { successRedirect: 'http://localhost:3000',
                                      failureRedirect: 'http://localhost:3000' }))
                                      
app.get('/guestlogin', passport.authenticate('dummy',{ successRedirect: 'http://localhost:3000',
                                                       failureRedirect: 'http://localhost:3000' }))

app.get('/logout',(req, res) => {
  req.session.destroy(function(err){ 
    res.redirect('http://localhost:3000')
  }) 
})

app.get('/get',(req,res)=>{
    users.getAll(function(err,data){
      if(err) throw err
      return res.send(data)
    })
  })
  
app.get('/remove',(req,res)=>{
  users.remove(function(err){
    if(err) throw err
  })
  res.redirect('/get')
})
