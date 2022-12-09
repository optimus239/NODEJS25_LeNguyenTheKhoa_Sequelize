const express = require("express");
const likeRoute = express.Router();
const {
  postLike,
  getLikeByRes,
  getLikeByUser,
} = require("../controllers/likeController");

//POST like,unlike
likeRoute.post("/postLike", postLike);
//GET likeByRes
likeRoute.get("/getLikeByRes/:res_id", getLikeByRes);
//GET likeByUser
likeRoute.get("/getLikeByUser/:user_id", getLikeByUser);

module.exports = likeRoute;
