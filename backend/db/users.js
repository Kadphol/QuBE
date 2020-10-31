const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection
const schema = mongoose.Schema

const users_schema = new schema({
    name: String
},
{ 
    strict: false 
}
)

const users = module.exports = mongoose.model("users",users_schema)

module.exports.add = function(data,callback){
    data.save(callback)
}

module.exports.getAll = function(callback){
    users.find(callback)
}

module.exports.remove = function(callback){
    users.deleteMany({},callback)
}