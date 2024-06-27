let mongoose=require("mongoose")
let Resturant=mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

let Restro=mongoose.model("Restro",Resturant)
module.exports=Restro;