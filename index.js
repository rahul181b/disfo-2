const express = require("express");

const app = express();

const PORT = 8082;
const mongoose = require('mongoose');
const userRoute = require('./routes/user.routes')
const DB_URI = "mongodb://127.0.0.1:27017/blogs";
mongoose
    .connect(`${DB_URI}`)
    .then(() => console.log("Connected to DB at", DB_URI))
    .catch((e) => console.log("Failed to connect to DB", e));


app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log('listening to PORT ', PORT);
})