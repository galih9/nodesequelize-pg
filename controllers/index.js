// import {
//   createPost,
//   getAllPosts,
//   getPostById,
//   updatePost,
//   deletePost
// } from "./postController";

// import {
//   getAllTodo
// } from "./todoController";
const todoPath = require('./todoController');
const { getAllTodo } = todoPath;

const postPath = require('./postController');
const { createPost,getAllPosts,getPostById,updatePost,deletePost } = postPath;

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getAllTodo
};