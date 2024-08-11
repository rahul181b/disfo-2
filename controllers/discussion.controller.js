const Blogs = require('../model/blogs.model');
const discModel = require('../model/disc.model')

const createDiscussion = async (req, res) => {
    console.log('create a new discussion');
    const author = req.body.author;
    const username = await Blogs.findOne({ username: author });
    if (!username) {
        res.status(404).json({ message: "user not found" });
    }
    try {
        const body = req.body;

        const newDiscussion = await discModel(body);
        const result = await newDiscussion.save();
        res.status(200).json({ result })
    } catch (error) {
        console.log(error);
        res.status(404).json({ error });
    }
}

module.exports = { createDiscussion }