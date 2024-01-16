const Joi = require("joi");

const string = Joi.string();
const stringReq = Joi.string().required();
const number = Joi.number();
const numberReq = Joi.number().required();
const email = Joi.string().email().required();

module.exports = {
  stringReq,
  email,
  number,
  numberReq,
  string,
};
