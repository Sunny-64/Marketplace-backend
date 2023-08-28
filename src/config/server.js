const mongoose = require("mongoose"); 

const initiateServer = async (app) => {
    try {
        // console.log("Connecting to DATABASE...");
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DATABASE CONNECTED SUCCESSFULLY...");
        app.listen(process.env.PORT || 3000, () => {
            console.log(`SERVER RUNNING AT PORT : ${process.env.PORT || 3000}`);
        }); 
    } catch (err) {
        console.log(`ERROR WHILE CONNECTING TO DATABASE: ${err.message}`);
        // console.error(err.message);
    }
};

module.exports = {
    initiateServer
};