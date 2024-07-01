let express = require("express");
let productItem = express.Router();
ProductCollection = require("../models/Product");




// product add
productItem.post("/product", async (req, res) => {
  try {
    let productAdd = new ProductCollection(req.body);
    await productAdd.save();
    return res.status(200).send("product data save in database");
  } catch (error) {
    return res.status(420).send("product is not add error create");
  }
});



// fetch product all data
productItem.get("/product/:a", async (req, res) => {
  let urlData = req.params;
  try {
    allProduct = await ProductCollection.findById(urlData);
    if (!allProduct) {
      return res.send(4040).send("all product is not find");
    } else {
      return res.send(allProduct);
    }
  } catch (error) {
    return res.send("error generate to fetch product data");
  }
});


// product update
productItem.patch("/product/:id",async (req,res)=>{
    let productId=req.params
    try {
        let resturant=await ProductCollection.findByIdUpdate(req.params.id,req.body)
        if (!resturant) {
            return res.send("resturant details is not update")
            
        }
        else{
            return res.send(resturant)
        }
    } catch (error) {
        return res.send("error create product details update")
        
    }
})



// product delete
productItem.delete("/product/:d",async (req,res)=>{
    let productDelete=await Restro.findByIdAndDelete(req.params.d,{new:true})
    try {
        if (!productDelete) {
            return res.send("product is not delete")
            
        }
        else{
            return res.send(200).send("product easily delete")
        }
    } catch (error) {
        return res.send("some error create",error)
        
    }

})


// export method
module.exports=productItem