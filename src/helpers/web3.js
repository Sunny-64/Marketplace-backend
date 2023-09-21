const {Web3} = require("web3"); 

const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-sepolia.g.alchemy.com/v2/by-2pm9bcadbu1DPTMAmv3-mAz7Xmu9U")); 
// console.log(web3); 

module.exports = web3; 