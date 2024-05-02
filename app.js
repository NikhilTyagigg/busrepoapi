require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const  PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("HI");
});

const products_routes = require("./routes/projucts");

app.use("/api/products", products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
        console.log(`${PORT} Yes i am here`);
        });
    }
    catch(error)
{
    console.log("err");

}
};

start();