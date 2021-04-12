const { getAllTodo, createTodo, getTodoByUser, getTodoById, completeTodo } = require('./todoController');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('./postController');
const { getAllComment, getCommentById } = require('./commentController');
const { getAllUser, updateUser, getUserById } = require('./userController');
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
  completeTodo,
  //comment
  getAllComment,
  getCommentById,
  //user
  getAllUser,
  updateUser,
  getUserById,
  // auth
  signIn,
  signUp
};