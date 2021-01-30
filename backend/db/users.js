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
    info: {
        // explore: {type: mongoose.Schema.Types.ObjectId, ref:'explore',default:null},
        chapter: {type:Number, default:0},
        unit: {type:Number, default:0},
        star: {type:[Number], default:[0,0,0,0,0]},
        highscore: {type:Number, default:0}
    },
    preSurvey: {
        degree: Number,
        type: Boolean,
        assess: Number,
    },
    postSurvey: {
        assess: Number,
        satisfy: Number,
        comment: String
    }
    
})

const users = module.exports = mongoose.model("users",users_schema)

module.exports.addnew = function(data,callback){
    users.findOne({id:data.id}).exec((err,res)=>{
        if (!res) {
                users.create(data)
        }
    }   
)}

module.exports.updateInfo = function(user,chapter,unit,star,score,callback){
    users.findOne({id:user.id}).exec((err,res)=>{
        if (res) {
            if(star!=undefined){
                res.info.star[chapter-1] = star
            }
            if(score!=undefined){
                res.info.highscore = score
            }
            if (chapter>res.info.chapter || (chapter==res.info.chapter && unit>res.info.unit)){
                res.info.chapter = chapter
                res.info.unit = unit
            } 
            res.markModified('info.star')
            res.save()
        }  
    })
}

module.exports.fetch = function(id,callback){
    users.findOne({id:id},callback)
}

module.exports.getAll = function(callback){
    users.find(callback)
}

module.exports.removeAll = function(callback){
    users.deleteMany({},callback)
}

module.exports.removeGuest = function(callback){
    users.deleteMany({type:'Guest'},callback)
}