const models = require("../database/models");

const getAllTodo = async (req, res) => {
    try {
        const todos = await models.Todo.findAll({
            include: [
                {
                    model: models.User,
                    as: 'author'
                }
            ]
        })
        return res.status(200).json({todos});
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTodo
}