const router = require('express').Router();

const { createDiscussion, getAllDiscussion, findUserDiscussions } = require('../controllers/discussion.controller')
const { verifyAuth } = require('../middlewares/verifyAuth')
router.post("/new", createDiscussion);
router.get('/all', verifyAuth, getAllDiscussion)
router.get('/user/:username', findUserDiscussions)
module.exports = router