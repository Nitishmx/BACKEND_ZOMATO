let express=require("express")
let app=express()
app.use(express.json())




// database connection
let mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/zomatobackend").then(()=>{
    console.log("database connect easily");
}).catch(()=>{
    console.log("some error to database connection");
})



let singupRout=require("./routes/Singup")
let loginRout=require("./routes/Login")
let restrurant=require("./routes/Resturant")




app.get("/",(req,res)=>{
    res.send("This is a home route")
})




// route that means middlewear
app.use("/api",singupRout)
app.use("/api",loginRout)
app.use("/api",restrurant)


app.listen(8000,()=>{
    console.log("server is runing");
})