
var passport = require('passport')
const users = require('./db/users.js')
const explore = require('./db/explore.js')
const router = require('express').Router();
const config = require('./config/config');

router.get('/', (req, res) => {
  res.send('Nothing here!')
})

router.get('/fetch', (req, res) => {
  if (req.isAuthenticated()) {
    users.fetch(req.user.id, function (err, data) {
        if (err) throw err
        return res.send(data)
    }) 
  }
})

router.get('/login', passport.authenticate('facebook'))
router.get('/login/callback', passport.authenticate('facebook', {
  successRedirect: config.ENDPOINT.FRONTEND_URL,
  failureRedirect: config.ENDPOINT.FRONTEND_URL
}));

router.get('/guestlogin', passport.authenticate('dummy'), (req, res) => {
  return res.send("OK")
});

router.post('/register', passport.authenticate('local-register', {
  successRedirect: config.ENDPOINT.FRONTEND_URL,
  failureMessage: true
}));

router.post('/local-login', passport.authenticate('local-login', {
  successRedirect: config.ENDPOINT.FRONTEND_URL,
  failureMessage: true
}))

router.put('/updateInfo', (req, res) => {
  users.updateInfo(req.user, req.body.chapter, req.body.unit, req.body.star, req.body.score, () => {
    return res.send("OK")
  })
})

router.put('/updatePreSurvey', (req, res) => {
  users.updatePreSurvey(req.user, req.body.degree, req.body.type, () => {
    return res.send("OK")
  })
})

router.put('/updatePostSurvey', (req, res) => {
  users.updatePostSurvey(req.user, req.body.satisfy, req.body.comment, () => {
    return res.send("OK")

  })
})

router.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    req.logout()
    return res.redirect(req.headers.referer || '/');
  })
})

router.get('/getuser', (req, res) => {
  users.getAll(function (err, data) {
    if (err) throw err
    return res.send(data)
  })
})

router.get('/getexplore', (req, res) => {
  explore.getAll(function (err, data) {
    if (err) throw err
    return res.send(data)
  })
})

router.get('/removeAll', (req, res) => {
  users.removeAll(function (err) {
    if (err) throw err
  })
  res.redirect('/api/getuser')
})

router.get('/removeGuest', (req, res) => {
  users.removeGuest(function (err) {
    if (err) throw err
  })
  res.redirect('/api/getuser')
})

module.exports = router;