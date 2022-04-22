const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const schema = mongoose.Schema

const users_schema = new schema({
    id: String,
    type: "Facebook" | "Guest" | "Local",
    name: String,
    password: { type: String, default: null },
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
    
});

const users = module.exports = mongoose.model("users", users_schema);

module.exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports.validPassword = function(password, userPassword) {
    return bcrypt.compareSync(password, userPassword);
};


module.exports.addnew = function (data, callback) {
    users.findOne({ id: data.id }).exec((err, res) => {
        if (!res) {
            data.created = Date()
            users.create(data)
        }
    })
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
            res.markModified('info.chapter');
            res.markModified('info.unit');
            res.markModified('info.star');
            res.markModified('info.highscore');
            res.save();
        }
    })
}

module.exports.fetch = function (id, callback) {
    users.findOne({ id: id }, { password: 0 }, callback)
}

module.exports.getAll = function (callback) {
    users.find({}, { password: 0 }, callback)
}

module.exports.removeAll = function (callback) {
    users.deleteMany({}, callback)
}

module.exports.removeGuest = function (callback) {
    users.deleteMany({ type: 'Guest' }, callback)
}