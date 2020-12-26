const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection
const schema = mongoose.Schema

const explore_schema = new schema({
    id: Number,
    chapter: Number,
    unit: Number,
    frame: Number,
    resource:{
        image: [String],
        text: String,
        voice: String
    }
})

const explore = module.exports = mongoose.model("explore",explore_schema)

module.exports.fetch = function(id,callback){
    explore.findOne({id:id},callback)
}

module.exports.addnew = function(data,callback){
    explore.findOne({id:data.id}).exec((err,res)=>{
        if (!res) {
            explore.create(data)
        }
    }   
)}

module.exports.getAll = function(callback){
    explore.find(callback)
}