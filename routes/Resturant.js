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


// all restro findout
resturant.get("/restro/:id",async (req,res)=>{
    try {
        let restrurant= await Restro.findById(req.params.id)
        if (!restrurant) {
            return res.status(440).send("not found")
            
        }
        else{

            return res.send(restrurant)
        }
    } catch (error) {
        return res.send("error")
        
    }
})

module.exports=resturant

resturant.get("/restro/:id", async(req,res)=>{
    let resturn=await Restro.findById(req.params.id)
    if(!resturn){
        return res.send(resturn)
    }
    else{
        res.send("restro is not found")
    }
    
})

module.exports=resturant


