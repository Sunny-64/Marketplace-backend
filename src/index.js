require("dotenv").config();
const {initiateServer} = require("./config/server"); 
const express = require("express"); 
const app = express(); 
const router = require("express").Router(); 
// connects to database and listens to the specified port
initiateServer(app); 
const cors = require("cors"); 
// middlewares 

// let corsOptions = {
//     origin: ["https://frontend-nft.qservicesit.com", "http://localhost:3000"],
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

let corsOptions ={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    Credential : false
}

app.use(cors(corsOptions)); 
router.use(cors(corsOptions))
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use("/.netlify/functions/app", router); 

// user routes 
const userRoutes = require("./routes/user-routes"); 
router.use("/users", userRoutes); 

// nft routes
const nftRoutes = require("./routes/nft-routes"); 
router.use("/nfts", nftRoutes); 

router.get("/", (req, res) => {
    res.send("Welcome to backend nft")
})

router.get("*", (req, res) => {
    res.status(404).json({
        success : false, 
        message : "Page not found"
    });
}); 

module.exports = {
    app,
}