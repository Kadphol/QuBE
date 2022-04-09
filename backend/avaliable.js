var avaliable = 4;

module.exports = (app) => {
    app.post('/avaliable', (req, res) => {
        avaliable = req.avaliable
    });

    app.get('/avaliable', (req, res) => {
        res.send({ avaliable })
    });
}