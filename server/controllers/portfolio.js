const asyncHandler = require("express-async-handler");
const sendMailCustom = require("../utils/sendMailCustom");
const sendEmail = asyncHandler(async (req, res) => {
  const { email, name, description } = req.body;
  const response = await sendMailCustom({ email, name, description });
  return res.json({
    success: true,
    mes: "Đã gửi thành công. Tôi sẽ liên lạc với bạn sau!",
  });
});

module.exports = {
  sendEmail,
};
