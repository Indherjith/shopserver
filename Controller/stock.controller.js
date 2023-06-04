const {StockAdd} = require('../Model/stock.model')

const getAllProducts = async(req,res)=>{
    try{
        const stocks = await StockAdd.find();
        res.status(200).send(stocks);
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
}

const AddProduct = async(req,res)=>{
    const data = req.body;
    // console.log(addnew);
    try{
        const feed = await StockAdd.insertMany({...data})
        res.status(201).send("product added successfully")   
    }
    catch(err){
        res.status(404).send(err);
    }
}

const PatchProduct = async(req,res)=>{
    const data = req.body;
    try{
        const update = await StockAdd.updateOne({_id:data._id},{$set:data})
        res.status(201).send("Product Updated Successfully");
    }
    catch(err){
        console.log(err);
    }
}

const DeleteProduct = async(req,res)=>{
    const {_id} = req.body;
    try{
        const Delete = await StockAdd.deleteOne({_id});
        res.status(201).send("Product Deleted Successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAllProducts,AddProduct,PatchProduct,DeleteProduct};