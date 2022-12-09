const sequelize = require("../models/index");
const init_models = require("../models/init-models");
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require("../config/reponse");

//Add order
const postOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let checkOrder = await model.order.findOne({
      where: {
        user_id,
        food_id,
      },
    });
    if (!checkOrder) {
      arr_sub_id = "[" + arr_sub_id.toString() + "]";
      let result = await model.order.create({
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
      });
      sucessCode(res, result, "Thêm số lượng món thành công");
    } else {
      failCode(res, "Chọn món khác");
    }
  } catch (err) {
    errorCode(res, "Lỗi Backend");
  }
};

module.exports = {
  postOrder,
};
