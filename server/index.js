const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const initRouter = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    url: process.env.CLIENT_URL || "*",
  })
);
app.get("/", (req, res) => {
  res.send("server on");
});
initRouter(app);
app.listen(PORT, () => console.log(`server on: http://localhost:${PORT}`));
