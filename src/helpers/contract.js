const web3 = require("./web3"); 
const path = require("path"); 
const ABI = require("./Market.json"); 
// console.log(ABI);
const contractAddress = "0x528022AA4AD560eE8236372d30F908B9C64Fc138";


const contractInstance = new web3.eth.Contract(ABI.abi, contractAddress); 
// console.log(contractInstance)

module.exports = contractInstance; 