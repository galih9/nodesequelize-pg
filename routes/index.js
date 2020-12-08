const controllers = require('../controllers');
const express = require("express");
let router = express.Router();

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";
// middlewares
router.use(function (req, res, next) {
    // console.log(req.url, "@", Date.now());
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

module.exports = router;
