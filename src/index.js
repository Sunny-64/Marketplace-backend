require("dotenv").config();
const {initiateServer} = require("./config/server"); 
const express = require("express"); 
const app = express(); 
// connects to database and listens to the specified port
initiateServer(app); 
const cors = require("cors"); 

const NFT = require("./models/nft-model"); 

// configs
const PORT = process.env.port || 3000; 

// middlewares 
app.use(cors()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// user routes 
const userRoutes = require("./routes/user-routes"); 
app.use("/users", userRoutes); 

// nft routes
const nftRoutes = require("./routes/nft-routes"); 
app.use("/nfts", nftRoutes); 

app.get("*", (req, res) => {
    res.status(404).json({
        success : false, 
        message : "Page not found"
    })
}); 

