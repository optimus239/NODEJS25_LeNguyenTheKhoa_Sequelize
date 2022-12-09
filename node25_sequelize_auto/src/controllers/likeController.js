const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require("../config/reponse");
const { date } = require("../utils/dateUtils");

//Like - Unlike
const postLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let checkLike = await model.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    if (checkLike) {
      model.like_res.destroy({
        where: {
          user_id,
          res_id,
        },
      });
      failCode(res, { user_id, res_id }, " Unlike");
    } else {
      let result = await model.like_res.create({
        user_id,
        res_id,
        date_like: date,
      });
      sucessCode(res, result, "Like");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

//Like(res)
const getLikeByRes = async (req, res) => {
  try {
    let res_id = req.params.res_id;
    let result = await model.like_res.findAll({
      where: {
        res_id,
      },
    });
    if (result.length != 0) {
      sucessCode(res, result, "Danh sách like theo nhà hàng");
    } else {
      sucessCode(res, result, "Không có");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

// Like(user)
const getLikeByUser = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    let result = await model.like_res.findAll({
      where: {
        user_id,
      },
    });
    if (result.length != 0) {
      sucessCode(res, result, "Danh sách like theo user");
    } else {
      sucessCode(res, result, "Không có");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

module.exports = {
  postLike,
  getLikeByRes,
  getLikeByUser,
};
