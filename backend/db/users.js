const mongoose = require('mongoose');
const config = require('../config/config');
const explore = require('./explore')

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection
const schema = mongoose.Schema

const users_schema = new schema({
    id: String,
    type: "Facebook" | "Guest",
    name: String,
    image: String,
    created: typeof(Date()),
    info: {
        chapter: { type: Number, default: 0 },
        unit: { type: Number, default: 0 },
        star: { type: [Number], default: [0, 0, 0, 0, 0] },
        highscore: { type: Number, default: 0 }
    },
    preSurvey: {
        degree: { type: Number, default: 0 },
        type: Boolean,
    },
    postSurvey: {
        satisfy: { type: Number, default: 0 },
        comment: String
    }
})

const users = module.exports = mongoose.model("users", users_schema)

module.exports.addnew = function (data, callback) {
    users.findOne({ id: data.id }).exec((err, res) => {
        if (!res) {
            data.created = Date()
            users.create(data)
        }
    }
    )
}

module.exports.updateInfo = function (user, chapter, unit, star, score, callback) {
    users.findOne({ id: user.id }).exec((err, res) => {
        if (res) {
            if (star != undefined) {
                res.info.star = star
            }
            if (score != undefined) {
                res.info.highscore = score
            }
            if (chapter != undefined && unit != undefined) {
                res.info.chapter = chapter
                res.info.unit = unit
            }
            res.markModified('info.star')
            res.save()
        }
    })
}

module.exports.fetch = function (id, callback) {
    users.findOne({ id: id }, callback)
}

module.exports.getAll = function (callback) {
    users.find(callback)
}

module.exports.removeAll = function (callback) {
    users.deleteMany({}, callback)
}

module.exports.removeGuest = function (callback) {
    users.deleteMany({ type: 'Guest' }, callback)
}