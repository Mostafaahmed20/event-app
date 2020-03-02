var mongoose = require('mongoose')
var admainmodel = require('../model/adminMODEL')
var usermodel = require('../model/userMODEL')
var eventMODULE = require('../model/adminMODEL')
function ADMAINAPI(app){
app.post('/signup' , (req ,res)=>{
    try{
    const {username , password , mail   } = req.body
    let admin = new admainmodel({
        _id:mongoose.Types.ObjectId(),
        username,
        password,
        mail


    })

    admin.save()
    res.json({massage:'sucsses'})
}
catch(error){
    res.json({massage:'error'})
}
})

app.post('/login' , (req ,res)=>{
    try{
    const {username , password} = req.body
    let admin1 =  new admainmodel.findOne({username , password})
    if(admin1){
        req.session.admin1 = admin1
    }
    res.json({massage:'sucsses'})
}
catch(error){
    res.json({massage:'error'})

}

})



app.post('/newevent' , (req , res)=>{
    try{
    const {Venue , place , date ,Activities , Sponsor , user_id } = req.body
    let event1 = new eventMODULE({
        Venue,
        place,
        date,
        Activities,
        Sponsor,
        user_id

    })

    event1.save()
    res.json({massage:'sucsses'})
}
catch(error){
    res.json({massage:'error'})
}
})



app.post('/ubdateEVENT' , (req ,res)=>{
    const{ _id } = req.body
    eventMODULE.findByIdAndUpdate({_id:_id}).exec((err , ubdated)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'ubdated'})



    })
})





app.get('/getallDATA' , (req ,res)=>{
    usermodel.find({}).exec((err ,data)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses' , 'data' :date})


    })
})








}
module.exports = ADMAINAPI