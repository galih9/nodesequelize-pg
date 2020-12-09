const models = require('../database/models');

const getAllUser = async (req, res) => {
    try {
        const user = await models.User.findAll({
            order : [
                [ 'id', 'ASC' ]
            ]
        })
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const [ updated ] = await models.User.update(req.body, {
            where: { id: userId }
        })
        if (updated) {
            const updatedUser = await models.User.findOne({ where: { id: userId } });
            return res.status(200).json({ user: updatedUser })
        }
        throw new Error("User not found");
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    getAllUser,
    updateUser
}