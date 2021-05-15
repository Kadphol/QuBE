var passport = require('passport')
const users = require('./db/users.js')
const explore = require('./db/explore.js')
const express = require('express');
const router = express.Router();
const config = require('./config/config.js');


router.get('/', (req, res) => {
  res.send('Backend')
})

router.get('/init', (req, res) => {
  data = {
    id: 0,
    chapter: 0,
    unit: 0,
    frame: 0,
    resource: {
      image: ['', ''],
      text: 'hello',
      voice: ''
    }
  }
  explore.addnew(data)
  return res.send("SUCCESS")
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
  successRedirect: `http://68.183.155.239`,
  failureRedirect: `http://68.183.155.239`
})

)
router.get('/guestlogin', passport.authenticate('dummy'), (req, res) => {
  return res.send("OK")
})

router.put('/updateInfo', (req, res) => {
  console.log(req);
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
  res.redirect('/getuser')
})

router.get('/removeGuest', (req, res) => {
  users.removeGuest(function (err) {
    if (err) throw err
  })
  res.redirect('/getuser')
})

router.get('/test', (req, res) => {
  data = {
    id: 1,
    chapter: 0,
    unit: 0,
    frame: 1,
    resource: {
      image: ['', ''],
      text: 'hello',
      voice: ''
    }
  }
  explore.addnew(data)
  return res.send("SUCCESS")
})

module.exports = router;