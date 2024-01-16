const validateDto = (schema) => (req, res, next) => {
  const message = schema.validate(req.body)?.error?.details[0].message;
  if (message)
    return res.json({
      success: false,
      message,
    });
  next();
};
module.exports = validateDto;
