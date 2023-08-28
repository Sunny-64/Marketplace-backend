const web3 = require("./web3"); 
const path = require("path"); 
const ABI = require("./ABI.json"); 

const contractAddress = "0x4f9B11dd38176bdd369aA99538D292FC1f2c1f17"; 


const contractInstance = new web3.eth.Contract(ABI.abi, contractAddress); 

module.exports = contractInstance; 