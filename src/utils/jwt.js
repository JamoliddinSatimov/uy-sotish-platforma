const jwt = require("jsonwebtoken")

const sign = payload => {
    return jwt.sign(payload, "SECRET_KEY")
}

module.exports = sign