const mongoose = require("mongoose"); 

const connectDB = async () => {
    try {
        // console.log("Connecting to DATABASE...");
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DATABASE CONNECTED SUCCESSFULLY...");
    } catch (err) {
        console.log("ERROR WHILE CONNECTING TO DATABASE:");
        console.error(err.message);
    }
};

module.exports = connectDB;