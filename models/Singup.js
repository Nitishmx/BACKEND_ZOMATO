let mongoose=require("mongoose")
let CreateSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    }
})


let Singup=mongoose.model("Singup",CreateSchema);  //first collection create
module.exports=Singup;//collection exports