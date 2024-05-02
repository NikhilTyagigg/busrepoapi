const express = require("express")

const router = express.Router();

const {getallbuslists,getallbuslisttesting} = require("../controllers/products");

router.route('/').get(getallbuslists);
router.route('/testing').get(getallbuslisttesting);

module.exports = router;
