
const mongoose = require('mongoose');

const discSchema = new mongoose.Schema({
    title: { type: String },
    author: { type: String, immutable: true },
    content: { type: String, default: "" }
})

const discModel = mongoose.model("discussion", discSchema);

module.exports = discModel