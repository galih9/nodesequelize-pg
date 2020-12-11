const models = require('../database/models');

const config = require("../database/config/authConfig");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
    // Save User to Database
    await models.User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        res.json({ message: "User was registered successfully!", user });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

const signIn = async (req, res) => {
    try {
        await models.User.findOne({
            where: {
                name: req.body.name
            }
        }).then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            if (!passwordIsValid) {
                return res.status(401).json({
                    accessToken: null,
                    message: "Invalid Password!"
                })
            }
            return res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email,
                accessToken: token
            })

        })
    } catch (error) {
        return res.status(500).json({ error });
    }

};


module.exports = {
    signUp,
    signIn
}