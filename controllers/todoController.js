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
        return res.status(200).json({ todos });
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = await models.Todo.create(req.body);
        return res.status(201).json({
            todo
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTodo,
    createTodo
}