const router = require('express').Router();

const { createDiscussion } = require('../controllers/discussion.controller')

router.post("/new", createDiscussion);

module.exports = router