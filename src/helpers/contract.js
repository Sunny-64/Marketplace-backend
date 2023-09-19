const web3 = require("./web3"); 
const path = require("path"); 
const ABI = require(path.resolve(__dirname, "../../", "artifacts", "contracts", "NFTmarketplace.sol", "market.json")); 

// const contractAddress = "0x924682cd7208B5d16E0540134f6d3bDA04095BA5"; 
const contractAddress = "0x924682cd7208B5d16E0540134f6d3bDA04095BA5";


const contractInstance = new web3.eth.Contract(ABI.abi, contractAddress); 

module.exports = contractInstance; 