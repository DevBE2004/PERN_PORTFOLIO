const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    mes: "thanh cong",
  });
});

module.exports = {
  sendEmail,
};
