const router = require('express').Router();
var available = 1;

router.post('/', (req, res) => {
    if(req.body.available && req.body.available != 0) {
        available = req.body.available
        return res.send(`OK ${req.body.available}`)
    } else {
        return res.send(`Error`).statusCode(400);
    }

});

router.get('/', (req, res) => {
    return res.send({ available })
});

module.exports = router;