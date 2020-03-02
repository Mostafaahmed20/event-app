
var express = require('express')
var app = express()
var expressSESSION = require('express-session')
var connectDB = require('./connectDB')
var bodyPARSER = require('body-parser')
// var COOKIEPARSER = require('cookie-parser')
var uuid = require('uuid/v4')
var USERAPI = require('./APIS/USERAPI')
var ADMAINAPI = require('./APIS/adminAPI')
var EVENTAPI = require('./APIS/EVENTAPI')
var port = process.env.port || 5000
/////////////////middlewear///////////////////////////
app.use(bodyPARSER.json())
app.use(expressSESSION({
    secret:'mysession',
    genid:uuid
}))
connectDB()
USERAPI(app)
ADMAINAPI(app)
EVENTAPI(app)
app.get('/' , (req , res)=>{
    res.json({massage:'the server is running'})

})
app.listen(port  ,  console.log(`app is listning to port ${port}`))