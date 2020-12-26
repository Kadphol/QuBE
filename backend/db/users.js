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
        explore: {type: mongoose.Schema.Types.ObjectId, ref:'explore',default:null},
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
            explore.fetch(0,(err,init)=>{
                data.info.explore = init._id     
                users.create(data)
            })
        }
    }   
)}

module.exports.updateExplore = function(user,updateid,callback){
    users.findOne({id:user.id}).exec((err,res)=>{
        if (res) {
            explore.fetch(updateid,(err,init)=>{
                res.info.explore = init._id
                console.log(res)
                res.save()
            })
        }
    })
}

module.exports.fetch = function(id,callback){
    users.findOne({id:id},callback)
}

module.exports.getAll = function(callback){
    users.find(callback)
}

module.exports.remove = function(callback){
    users.deleteMany({},callback)
}