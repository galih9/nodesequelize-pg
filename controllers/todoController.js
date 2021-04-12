const models = require("../database/models");
const { getPagination, getPagingData } = require('../utils');

const getAllTodo = async (req, res) => {
    const { page, size, title } = req.query;
    let crpage = page - 1;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(crpage, size);
    try {
        const todos = await models.Todo.findAndCountAll({
            where: condition,
            limit: limit,
            offset: offset,
            distict: true,
            include: [
                {
                    model: models.User,
                    as: 'author'
                }
            ]
        })
        const response = getPagingData(todos, page, limit);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTodoById = async (req, res) => {
    try {
        const { todoId } = req.params;
        const todo = await models.Todo.findOne({
            where: { id: todoId }
        })
        return res.status(200).json({ todo })
    } catch (error) {
        return res.status(500).json(error.message)
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

const completeTodo = async (req, res) => {
    try {
        const { postId } = req.params;
        const [updated] = await models.Post.update(req.body, {
            where: { id: postId }
        });
        if (updated) {
            const updatedPost = await models.Post.findOne({ where: { id: postId } });
            return res.status(200).json({ post: updatedPost });
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTodo,
    createTodo,
    getTodoByUser,
    getTodoById,
    completeTodo
}