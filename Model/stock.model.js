const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    img:String,
    price:Number,
    name:String,
    warranty:String,
    count:Number
})

const StockAdd = mongoose.model('stockadd',stockSchema);

module.exports = {StockAdd}