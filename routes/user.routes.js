const router = require('express').Router();
const { registerUser, getAll, getUser } = require('../controllers/user.controllers');
const { validateRegistration } = require("../middlewares/user.validator");
const { verifyAuth } = require('../middlewares/verifyAuth');
router.post("/register", validateRegistration, registerUser);
router.get("/all", verifyAuth, getAll);
router.get("/:username", getUser);

module.exports = router;