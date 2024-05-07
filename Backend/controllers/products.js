const BusRoute = require("../models/product");
//const Product = require("../models/product");

const getallbuslists = async(req,res) =>{
    const myData = await BusRoute.find({});

res.status(200).json({myData});
};

const getallbuslisttesting = async (req,res) =>{
    res.status(200).json({myData});

};

module.exports = {getallbuslists,getallbuslisttesting};