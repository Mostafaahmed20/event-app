var mongoose = require('mongoose')
var eventMODULE = require('../model/EVENTMODULE')

function eventAPI(app){
app.post('/newevent' , (req , res)=>{
    try{
    const {Venue , place , date ,Activities , Sponsor , user_id } = req.body
    let event1 = new eventMODULE({
        _id:mongoose.Types.ObjectId(),
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
    eventMODULE.find({}).exec((err ,data)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses' , 'data' :date})


    })
})

}
module.exports = eventAPI