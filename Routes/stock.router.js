const {Router} = require('express');
const {getAllProducts,AddProduct,PatchProduct,DeleteProduct} = require("../Controller/stock.controller")

const stockRouter = Router();

stockRouter.get("/",getAllProducts);
stockRouter.post("/",AddProduct);
stockRouter.patch("/",PatchProduct);
stockRouter.delete("/",DeleteProduct);

module.exports={stockRouter};