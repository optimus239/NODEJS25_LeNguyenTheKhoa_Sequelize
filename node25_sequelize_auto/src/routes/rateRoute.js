const express = require("express");
const rateRoute = express.Router();
const {
  postRate,
  getRateByRes,
  getRateByUser,
} = require("../controllers/rateController");

//POST rate
rateRoute.post("/postRate", postRate);
//GET rateByRes
rateRoute.get("/getRateByRes/:res_id", getRateByRes);
//GET rateByUser
rateRoute.get("/getRateByUser/:user_id", getRateByUser);

module.exports = rateRoute;
