require("dotenv").config();
const mongoose = require("mongoose"); // Add this line to import mongoose

const connectDb = require("./db/connect");

const Product = require("./models/product");

const BusData = require("./Bus.json"); // Assuming your JSON file is named Bus.json

const start = async () => {
    try {
        console.log("Connecting to the database...");
        await connectDb(process.env.MONGODB_URL);

        console.log("Inserting BusData into the database...");
        await Product.insertMany(BusData);

        console.log("BusData inserted successfully.");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Close the database connection
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};

start();
