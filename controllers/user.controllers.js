const Blogs = require('../model/blogs.model');

const getAll = async (req, res) => {
    try {
        const result = await Blogs.find({});
        if (result.length === 0) {
            return res.status(404).json({ message: "No user found" })
        }
        res.json(result)
    } catch (error) {
        res.json({ error })
    }

}

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Blogs.find({ username: username });
        if (result.length === 0) {
            return res.status(404).json({ message: "no user found" })
        }
        res.json(result)
    } catch (error) {
        res.json(error);
    }


}

const registerUser = async (req, res) => {
    console.log("register user function")
    try {
        const body = req.body
        // to check if the user exist in the database
        const username = req.body.username;
        const email = req.body.email;
        const userExist = await Blogs.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
        })
        console.log(userExist);
        if (userExist) {
            return res.status(409).json({ message: "Failed to create new user", reason: "Already Exists in DB" })
        }
        const newUser = await Blogs(body);
        const result = await newUser.save();
        res.json({ message: "user registered", result });
    } catch (error) {
        console.log(error);
        res.json({ message: "error ", error })
    }
}

module.exports = { getAll, getUser, registerUser }