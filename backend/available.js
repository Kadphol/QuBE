const router = require('express').Router();
var available = 1;

router.post('/', (req, res) => {
    available = req.body.available
    return res.send(`OK ${req.body.available}`)
});

router.get('/', (req, res) => {
    return res.send({ available })
});

module.exports = router;