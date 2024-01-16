const errorServer = (error, req, res, next) => {
    const formatMes = error.message?.replace(`\":`, "");
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    return res.status(statusCode).json({
      status: false,
      mes: formatMes,
    });
  };
  const throwErrorWithStatus = (code, message, res, next) => {
    const formatMes = message?.replace(`\"`, "");
    const error = new Error(formatMes);
    res.status(code);
    next(error);
  };
  const badRequest = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found`);
    res.status(404);
    next(error);
  };
  module.exports = {
    errorServer,
    throwErrorWithStatus,
    badRequest,
  };
  