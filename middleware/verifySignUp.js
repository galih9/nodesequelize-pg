const models = require('../database/models');

exports.checkDuplicateUserEmail = async (req, res, next) => {
    await models.User.findOne({
        where: { name: req.body.name }
    }).then(async (user) => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        await models.User.findOne({
            where: { email: req.body.email }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    })
}