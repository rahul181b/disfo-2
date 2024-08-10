require('dotenv').config();

const PASSWORD = process.env.ROUTE_PASSWORD

const verifyAuth = (req, res, next) => {
    const x_api_key = req.headers.x_api_key;

    if (!x_api_key) {
        return res.status(404).json({ message: "unauthorized access" })
    }

    if (x_api_key !== PASSWORD) {
        return res.status(404).json({ message: "unauthorized access" })
    }
    next();
}

module.exports = { verifyAuth }