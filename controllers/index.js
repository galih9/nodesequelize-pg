const { getAllTodo, createTodo, getTodoByUser, getTodoById } = require('./todoController');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('./postController');
const { getAllComment, getCommentById } = require('./commentController');
const { getAllUser, updateUser } = require('./userController');
const { signIn,signUp } = require('./authController')

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
  getTodoById,
  //comment
  getAllComment,
  getCommentById,
  //user
  getAllUser,
  updateUser,
  // auth
  signIn,
  signUp
};