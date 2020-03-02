var mongoose = require('mongoose')


function connectDB (){

    mongoose.connect('mongodb://localhost:27017/yalladeals', {useNewUrlParser: true});
}
module.exports = connectDB