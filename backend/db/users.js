const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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
    postSurvey: {
        satisfy: { type: Number, default: 0 },
        comment: { type: String, default: null }
    },
    preSurvey: {
        degree: { type: Number, default: 0 },
        type: { type: Boolean, default: false }
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

module.exports.updatePreSurvey = function (user, degree, type, callback) {
    users.findOne({ id: user.id }).exec((err, res) => {
        if (res) {
            res.preSurvey.degree = degree
            res.preSurvey.type = type
            res.save()
        }
    })
}

module.exports.updatePostSurvey = function (user, satisfy, comment, callback) {
    users.findOne({ id: user.id }).exec((err, res) => {
        if (res) {
            res.postSurvey.satisfy = satisfy
            res.postSurvey.comment = comment
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