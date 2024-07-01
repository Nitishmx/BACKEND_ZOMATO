let mongoose=require("mongoose")
let productSchema=mongoose.Schema({
    name:{
        type:String
    },
    descriptions:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    }
})

let Product=mongoose.model("Product",productSchema)
module.exports=Product;