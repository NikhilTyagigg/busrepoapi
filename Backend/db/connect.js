const mongoose = require("mongoose");

uri = "mongodb+srv://nikhiltyagin17:VAvr0iM2untiTKyd@cluster0.osy6u8h.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () =>
{
    console.log("connect database");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;