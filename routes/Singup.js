let express=require("express")
let singupRout=express.Router()
let CollectionSingup=require('../models/Singup')
let bcrypt=require("bcrypt")
singupRout.post("/singup",async (req,res)=>{
    console.log(res.body);
    let{fistName,lastName,password,email}=req.body
    let collectiondata=await CollectionSingup.findOne({email})
    if (collectiondata) {
        res.send("Already user register")
    }
    else{
       password=await bcrypt.hash(password,10)
        let dataStoreDb=new CollectionSingup({
            firstName:fistName,
            lastName:lastName,
            password:password,
            email:email
        })
        await dataStoreDb.save()
        res.send("Registration Successfuly")
    }

})

module.exports=singupRout