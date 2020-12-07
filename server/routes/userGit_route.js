const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/userGit_controller.js");

/* --------------[ ROUTER ]----------------- */

// [GET]
router.get("/users/:username", UserCtrl.searchUser)
router.get("/home", UserCtrl.usersList)

// [POST]
router.post("/users", UserCtrl.searchUser);

module.exports = router;
