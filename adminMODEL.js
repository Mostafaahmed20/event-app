var mongoose = require('mongoose')

var admainMODEL = new mongoose.model('admin' , {
    _id:mongoose.Schema.Types.ObjectId,
    username :String ,
    password:String ,
    mail:String,
    
})
module.exports = admainMODEL