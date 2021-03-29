const jwt = require("jsonwebtoken");
const config = require('../database/config/authConfig')

exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};