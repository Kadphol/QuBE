
var passport = require('passport')
const users = require('./db/users.js')
const explore = require('./db/explore.js')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send('Backend')
  })

  app.get('/init', (req, res) => {
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

  app.get('/fetch', (req, res) => {
    if (req.isAuthenticated()) {
      users.fetch(req.user.id, function (err, data) {
          if (err) throw err
          return res.send(data)
      }) 
    }
  })

  app.get('/login', passport.authenticate('facebook'))
  app.get('/login/callback', passport.authenticate('facebook', {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000"
  })
  )
  app.get('/guestlogin', passport.authenticate('dummy'), (req, res) => {
    // console.log(req.user)
    return res.send("OK")
  })

  app.put('/updateInfo', (req, res) => {
    console.log(req.user)
    users.updateInfo(req.user, req.body.chapter, req.body.unit, req.body.star, req.body.score, () => {
      return res.send("OK")
    })
  })

  app.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
      return res.redirect(req.headers.referer || '/');
    })
  })

  app.get('/getuser', (req, res) => {
    users.getAll(function (err, data) {
      if (err) throw err
      return res.send(data)
    })
  })

  app.get('/getexplore', (req, res) => {
    explore.getAll(function (err, data) {
      if (err) throw err
      return res.send(data)
    })
  })

  app.get('/removeAll', (req, res) => {
    users.removeAll(function (err) {
      if (err) throw err
    })
    res.redirect('/getuser')
  })

  app.get('/removeGuest', (req, res) => {
    users.removeGuest(function (err) {
      if (err) throw err
    })
    res.redirect('/getuser')
  })

  app.get('/test', (req, res) => {
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
}