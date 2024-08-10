const Joi = require('joi');

const registerSchema = Joi.object().keys({
    fullName: Joi.string().max(50),
    username: Joi.string().max(25).required(),
    email: Joi.string().max(25).email().required(),//validating email
})

const validateRegistration = (req, res, next) => {
    const { fullName, username, email } = req.body

    const { error } = registerSchema.validate({ fullName, username, email });

    if (error) {
        return res.status(403).json(error);
    }
    next();
}

module.exports = { validateRegistration }