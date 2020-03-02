var mongoose = require('mongoose')
var userMODEL = require('../model/userMODEL')

function userapi(app){
    
    app.post('/signup' , (req ,res)=>{
        
        const {username , age , address , password , admin } = req.body
        let user = new userMODEL({
            _id:mongoose.Types.ObjectId(),
            username,
            age,
            address,
            password,
            admin
    
    
        })
    
        user.save((err ,sucsses)=>{
            err?
            res.json({massage:error})
            :
            res.json({massage:'sucsses'})

        })
       

    })
    app.post('/login' , (req ,res)=>{
        try{
        const {username , password} = req.body
        let user =  new userMODEL.findOne({username , password})
        if(user){
            req.session.user = user
        }
        res.json({massage:'sucsses'})
    }
    catch(error){
        res.json({massage:'error'})
    
    }
    
    })


    app.get('/getallevnts' , (req ,res)=>{
        const {_id } = req.body
        userMODEL.findById({_id:_id}).exec((err , data)=>{
            err?
            res.json({massage:'error'})
            :
            res.json({massage:'sucsses' , 'data':data})

        })


    })


    }

module.exports = userapi