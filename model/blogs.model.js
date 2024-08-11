

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
})


const blogModel = mongoose.model("blog", blogSchema);



module.exports = blogModel