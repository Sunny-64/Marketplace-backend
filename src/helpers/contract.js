const web3 = require("./web3"); 
const path = require("path"); 
const ABI = require("./ABI.json"); 

const contractAddress = "0x9830afdf2B5035FeD001CA9e1cF7d63f4f854f72"; 


const contractInstance = new web3.eth.Contract(ABI.abi, contractAddress); 

module.exports = contractInstance; 