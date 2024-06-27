let express=require("express")
let resturant=express.Router()
let Restro=require("../models/Resturant")

resturant.post("/restro",async(req,res)=>{
    try {
        let saveDatabase=new Restro(req.body)
        await saveDatabase.save()
        return res.status(200).send(saveDatabase)
        
    } catch (error) {
        return res.status(400).send("error create")
        
    }
})

module.exports=resturant;