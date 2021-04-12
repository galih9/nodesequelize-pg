const controllers = require('../controllers');
const express = require("express");
let router = express.Router();

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";
// middlewares
const { checkDuplicateUserEmail, verifyToken } = require('../middleware');

router.use(function (req, res, next) {
    logger.info(req.url, "@", Date.now())
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// router.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

router.get('/', (req, res) => res.send('Welcome'))

// posts
router.route('/posts')
    .post(verifyToken, controllers.createPost)
    .get(verifyToken, controllers.getAllPosts);

router.route('/posts/:postId')
    .get(verifyToken, controllers.getPostById)
    .put(verifyToken, controllers.updatePost)
    .delete(verifyToken, controllers.deletePost);

// todos
router.route('/todos')
    .get(verifyToken, controllers.getAllTodo)
    .post(verifyToken, controllers.createTodo);

router.route('/todos/:todoId')
    .put(verifyToken,controllers.completeTodo)
    .get(verifyToken, controllers.getTodoById);

// comments
router.route('/comments')
    .get(verifyToken, controllers.getAllComment)

router.route('/comments/:commentId')
    .get(verifyToken, controllers.getCommentById)

// user
router.route('/users')
    .get(verifyToken, controllers.getAllUser)

router.route('/users/:userId')
    .get(verifyToken, controllers.getUserById)
    .put(verifyToken, controllers.updateUser)

// auth
router.route('/login').post(controllers.signIn)
router.route('/register').post(checkDuplicateUserEmail, controllers.signUp)

module.exports = router;
