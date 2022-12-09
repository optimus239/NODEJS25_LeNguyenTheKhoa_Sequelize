const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require("../config/reponse");
const { date } = require("../utils/dateUtils");

//add-update rate
const postRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let checkRate = await model.rate_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    if (checkRate) {
      let updateRate = {
        amount,
        date_rate: date,
      };
      let result = await model.rate_res.update(updateRate, {
        where: {
          user_id,
          res_id,
        },
      });
      sucessCode(res, result, "Cập nhật thành công");
    } else {
      let result = await model.rate_res.create({
        user_id,
        res_id,
        amount,
        date_rate: date,
      });
      sucessCode(res, result, "Đánh giá thành công");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

//Rate(res)
const getRateByRes = async (req, res) => {
  try {
    let res_id = req.params.res_id;
    let result = await model.rate_res.findAll({
      where: {
        res_id,
      },
    });
    if (result.length != 0) {
      sucessCode(res, result, "Danh sách đánh giá theo nhà hàng");
    } else {
      sucessCode(res, result, "Không có");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

//Rate(user)
const getRateByUser = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    let result = await model.rate_res.findAll({
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
  postRate,
  getRateByRes,
  getRateByUser,
};
