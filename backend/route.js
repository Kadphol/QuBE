
var passport = require('passport')
const users = require('./db/users.js')
const explore = require('./db/explore.js')
const router = require('express').Router();
const config = require('./config/config');

router.get('/', (req, res) => {
  res.send('Backend')
})

// router.get('/init', (req, res) => {
//   data = {
//     id: 0,
//     chapter: 0,
//     unit: 0,
//     frame: 0,
//     resource: {
//       image: ['', ''],
//       text: 'hello',
//       voice: ''
//     }
//   }
//   explore.addnew(data)
//   return res.send("SUCCESS")
// })

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

router.post('/register', (req, res) => {
  passport.authenticate('local-register', function(err, user, info) {
    if(err) {
      return res.status(500).send(JSON.stringify({
        'message': "Internal Server error"
      }));
    }
    if(!user) {
      return res.send(JSON.stringify(info))
    }
    if(user) {
      return res.send("OK");
    }
  })(req, res);
});

router.post('/local-login', (req, res) => {
  passport.authenticate('local-login', function(err, user, info) {
    if(err) {
      return res.status(500).send(JSON.stringify({
        'message': "Internal Server error"
      }));
    }
    if(!user) {
      return res.send(JSON.stringify(info))
    }
    if(user) {
      return res.send("OK");
    }
  })(req, res);
});

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

// router.get('/test', (req, res) => {
//   data = {
//     id: 1,
//     chapter: 0,
//     unit: 0,
//     frame: 1,
//     resource: {
//       image: ['', ''],
//       text: 'hello',
//       voice: ''
//     }
//   }
//   explore.addnew(data)
//   return res.send("SUCCESS")
// });

module.exports = router;