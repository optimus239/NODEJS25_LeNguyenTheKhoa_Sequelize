const express = require("express");
const orderRoute = express.Router();
const { postOrder } = require("../controllers/orderController");

//POST order
orderRoute.post("/postOrder", postOrder);

module.exports = orderRoute;
