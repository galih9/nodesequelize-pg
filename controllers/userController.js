const models = require('../database/models');
const { getPagination, getPagingData } = require('../utils');
var bcrypt = require("bcryptjs");

const getAllUser = async (req, res) => {
    const { page, size, title } = req.query;
    let crpage = page - 1;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(crpage, size);
    try {
        const user = await models.User.findAndCountAll({
            where: condition,
            limit: limit,
            offset: offset,
            distict: true,
            order: [
                ['id', 'ASC']
            ]
        })
        const response = getPagingData(user, page, limit);
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const [updated] = await models.User.update({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        }, {
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

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await models.User.findOne({
            where: {
                id: userId
            }
        })
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send("User with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllUser,
    updateUser,
    getUserById
}