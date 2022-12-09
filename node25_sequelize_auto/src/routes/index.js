const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");
const likeRoute = require("./likeRoute");
const rateRoute = require("./rateRoute");
const orderRoute = require("./orderRoute");
rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/like", likeRoute);
rootRoute.use("/rate", rateRoute);
rootRoute.use("/order", orderRoute);

module.exports = rootRoute;

//localhost:8080/api/user/getUser
