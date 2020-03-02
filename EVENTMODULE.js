var mongoose = require('mongoose')
var eventmodule = new mongoose.model('event' , {
    _id:mongoose.Schema.Types.ObjectId,
    Venue:String,
    place:String,
    date:String,
    Activities:String,
    Sponsor:String,
    user:{type:mongoose.Schema.Types.ObjectId , ref:'user'}

})
module.exports = eventmodule