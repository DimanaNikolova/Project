const router = require('express').Router()
const controllers = require('../controllers');
const alreadyAuth = require('../utils/alreadyAuth')


router.get('/login', controllers.user.get.login)
//router.get('/register',controllers.user.get.register)

router.post('/login', controllers.user.post.login)
router.post('/register', controllers.user.post.register)
router.get('/profile/:id', controllers.user.get.profile)

router.post('/verify', controllers.user.post.verifyLogin);
router.get('/logout', controllers.user.get.logout)

module.exports = router