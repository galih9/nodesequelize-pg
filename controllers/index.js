const todoPath = require('./todoController');
const { getAllTodo,createTodo,getTodoByUser } = todoPath;

const postPath = require('./postController');
const { createPost,getAllPosts,getPostById,updatePost,deletePost } = postPath;

const commentPath = require('./commentController');
const { getAllComment,getCommentById } = commentPath;

const userPath = require('./userController');
const { getAllUser,updateUser } = userPath;

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  //todo
  getAllTodo,
  createTodo,
  getTodoByUser,
  //comment
  getAllComment,
  getCommentById,
  //user
  getAllUser,
  updateUser
};