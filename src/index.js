require("dotenv").config();
const {initiateServer} = require("./config/server"); 
const express = require("express"); 
const app = express(); 
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
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 


// user routes 
const userRoutes = require("./routes/user-routes"); 
app.use("/users", userRoutes); 

// nft routes
const nftRoutes = require("./routes/nft-routes"); 
app.use("/nfts", nftRoutes); 

app.get("/", (req, res) => {
    res.send("Welcome to backend nft")
})

app.get("*", (req, res) => {
    res.status(404).json({
        success : false, 
        message : "Page not found"
    });
}); 

