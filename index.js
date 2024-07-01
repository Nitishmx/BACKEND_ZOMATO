// import express import
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


// all http request import 

let singupRout=require("./routes/Singup")
let loginRout=require("./routes/Login")
let restrurant=require("./routes/Resturant")
let product=require("./routes/ProductItem")




// Home route
app.get("/",(req,res)=>{
    res.send("This is a home route")
})




// route that means middlewear
app.use("/api",singupRout)
app.use("/api",loginRout)
app.use("/api",restrurant)
app.use("api",product)



// server port number
app.listen(8000,()=>{
    console.log("server is runing");
})