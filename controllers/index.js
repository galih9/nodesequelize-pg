const todoPath = require('./todoController');
const { getAllTodo,createTodo } = todoPath;

const postPath = require('./postController');
const { createPost,getAllPosts,getPostById,updatePost,deletePost } = postPath;

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  //todo
  getAllTodo,
  createTodo
};