require("dotenv").config();
const {initiateServer} = require("./config/server"); 
const express = require("express"); 
const functions = require("firebase-functions")
const app = express(); 
// connects to database and listens to the specified port
initiateServer(app); 
const cors = require("cors"); 

// middlewares 

let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions)); 
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
    });
}); 

exports.api = functions.https.onRequest(app); 