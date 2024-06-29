let express=require("express")
let loging=express.Router()
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let collectionOfSingup=require("../models/Singup")
loging.post('/loging',async (req,res)=>{
    let {password,email}=req.body;
    
    let frontData=req.body
    let findDataBaseData= await collectionOfSingup.findOne({email:frontData.email})
    if (!findDataBaseData) {
        res.send("This user is not register")
        
    }
    else{
        let validPassword= await bcrypt.compare(frontData.password,findDataBaseData.password)
        console.log(validPassword);
        if (!validPassword) {
            res.send("please enter the valid password")
            
        }
        else{
            let LoginData=JSON.stringify(findDataBaseData)
            let token=jwt.sign(LoginData,"tokencreatingsafljs")
            res.send({findDataBaseData,token})
             
        }


    }
})

module.exports=loging