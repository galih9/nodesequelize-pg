const controllers = require('../controllers');
const express = require("express");
let router = express.Router();

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";
// middlewares
router.use(function (req, res, next) {
    logger.info(req.url, "@", Date.now())
    next();
});

router.get('/', (req, res) => res.send('Welcome'))

// posts
router.route('/posts')
    .post(controllers.createPost)
    .get(controllers.getAllPosts);

router.route('/posts/:postId')
    .get(controllers.getPostById)
    .put(controllers.updatePost)
    .delete(controllers.deletePost);

// todos
router.route('/todos')
    .get(controllers.getAllTodo)
    .post(controllers.createTodo);

router.route('/todos/:userId')
    .get(controllers.getTodoByUser);

// comments
router.route('/comments')
    .get(controllers.getAllComment)

router.route('/comments/:commentId')
    .get(controllers.getCommentById)

// user
router.route('/users')
    .get(controllers.getAllUser)

router.route('/users/:userId')
    .put(controllers.updateUser)

module.exports = router;
