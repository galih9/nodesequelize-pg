const models = require('../database/models');
const { getPagination, getPagingData } = require('../utils');

const getAllComment = async (req, res) => {
    const { page, size, title } = req.query;
    let crpage = page - 1;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(crpage, size);
    try {
        const comment = await models.Comment.findAndCountAll({
            where: condition,
            limit: limit,
            offset: offset,
            distict: true,
            order: [
                [ 'id', 'ASC']
            ]
        });
        const response = getPagingData(comment, page, limit);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await models.Comment.findOne({
            where: { id: commentId }
        });
        return res.status(200).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllComment,
    getCommentById
}