var mongoose = require('mongoose')
var userMODEL = new mongoose.model('user' , {
    _id:mongoose.Schema.Types.ObjectId,
    username:String ,
    age:Number,
    address:String,
    password:String,
    // event:{Type:mongoose.Schema.Types.ObjectId , ref:'event'}

})
module.exports = userMODEL