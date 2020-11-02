var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = require('express')()
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy
var CLIENT_ID = '406602993675033'
var CLIENT_SECRET = 'ad29d0665bde6cd353d86ce0fff1094e'
const config = require('./config/config');
const users = require('./db/users.js')

app.listen(config.APP_PORT);

passport.serializeUser(function(user, done) {
  done(null, user);
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})
passport.use(new FacebookStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    data = new users({
        profile,
        accessToken,
        refreshToken
    })
    users.add(data,function(err){
    if(err) throw err
    })
    done(null, profile)
  }
))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req, res) => {
  let text
  if (req.user) text = "You are already logged in"
  else text = "You have not been logged in"
  res.send(text)
})
app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }))

app.get('/logout',(req, res) => {
  console.log(req.session)
  req.session.destroy(function(err){ 
  console.log(req.session)
    res.redirect('/')
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
