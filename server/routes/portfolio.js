const router = require("express").Router();
const ctrl = require("../controllers/portfolio");
const Joi = require("joi");
const { stringReq, email } = require("../middleware/joiSchema");
const validateDto = require("../middleware/validateDto");

router.post(
  "/send-mail",
  validateDto(Joi.object({ email, name: stringReq, description: stringReq })),
  ctrl.sendEmail
);

module.exports = router;
