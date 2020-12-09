const models = require('../database/models');

const getAllComment = async (req, res) => {
    try {
        const comment = await models.Comment.findAll();
        // console.log(comment)
        return res.status(200).json({ comment });
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
        // console.log(comment)
        return res.status(200).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllComment,
    getCommentById
}