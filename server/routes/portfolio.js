const router = require("express").Router();
const ctrl = require("../controllers/portfolio");

router.get("/send-mail", ctrl.sendEmail);

module.exports = router;
