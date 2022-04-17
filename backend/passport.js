var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var DummyStrategy = require('passport-dummy').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var uuid = require('uuid').v4
const config = require('./config/config');

var CLIENT_ID = config.CLIENT_ID;
var CLIENT_SECRET = config.CLIENT_SECERT;
var callbackUrl = config.ENDPOINT.URL + '/api/login/callback';
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
      callbackURL: callbackUrl,
      profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)']
    },
    function(accessToken, refreshToken, profile, done) {
      data = new users({
          id:profile.id,
          type:"Facebook",
          name:profile.displayName,
          image:profile.photos[0].value,
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
    done(null,data)
  }))

  passport.use('local-register', new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    passReqToCallback : true
  },
    function(req, name, password, done) {
      process.nextTick(function() {
        users.findOne({ 'name' : name }, function(err, user) {
          if(err) return done(err);

          if(user) {
            return done(null, false, {
              message: 'existed username'
            });
          } else {
            var genid = uuid();
            var data = new users({
              id: genid,
              type: "Local",
              name: name,
              password: users.generateHash(password),
              image:"https://i.pinimg.com/564x/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.jpg"
            });
            users.addnew(data, function(err) {
              if(err) throw err
              return done(null, data);
            });
          }
        });
      });
    }
  ));

  passport.use('local-login', new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    passReqToCallback : true
  },
    function(req, name, password, done) {
      users.findOne({ 'name': name }, function(err, user) {
        if(err) return done(err);
        if(!user) return done(null, false, {
          'message': 'user not found'
        });
        if(!user.validPassword(password)) return done(null, false, {
          'message': 'wrong username or password'
        });
        return done(null, user);
      });
    }
  ));

  app.use(passport.initialize())
  app.use(passport.session())

}