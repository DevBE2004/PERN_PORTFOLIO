const portfolio = require("./portfolio");
const initRouter = (app) => {
  app.use("/api/portfolio", portfolio);
};

module.exports = initRouter;
