const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/user.controller");
router.route("/users").get(userCtrl.signin).post(userCtrl.signup);
module.exports = router;
