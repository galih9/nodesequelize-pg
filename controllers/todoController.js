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
            data: todo,
            message: 'Todo created succesfully'
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getTodoByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const todo = await models.Todo.findAll({
            where: { userId: userId }
        })
        if (todo) {
            return res.status(200).json({ todo });
        }
        return res.status(404).send("Todo with specified user id is not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTodo,
    createTodo,
    getTodoByUser
}