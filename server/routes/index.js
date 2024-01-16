const { badRequest, errorServer } = require("../middleware/handleError");
const portfolio = require("./portfolio");
const initRouter = (app) => {
  app.use("/api/portfolio", portfolio);

  app.use(badRequest);
  app.use(errorServer);
};

module.exports = initRouter;
