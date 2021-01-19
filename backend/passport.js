var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy
var DummyStrategy = require('passport-dummy').Strategy
var uuid = require('uuid').v4

var CLIENT_ID = '406602993675033'
var CLIENT_SECRET = 'ad29d0665bde6cd353d86ce0fff1094e'
const users = require('./db/users.js')

module.exports = (app) => {
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
      // users.updateExplore(data,0,function(err){if(err) throw err})
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
    done(null,data)
  }))

  app.use(passport.initialize())
  app.use(passport.session())

}