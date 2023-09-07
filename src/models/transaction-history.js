const mongoose = require("mongoose"); 

const transactionHistorySchema = new mongoose.Schema({
    tokenId : {type : Number}, 
    userId : {type : String}, 
    transactionAmount : {type : Number}, // in wei
    transactionType : {type : String, enum : ['sell', 'purchase', 'bid']},
    transactionHash : {type : String}, 
    createdAt : {type : Date, default : Date.now}
}); 

module.exports = new mongoose.model("tx", transactionHistorySchema); 