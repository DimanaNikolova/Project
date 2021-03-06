const controllers = require('../controllers');
const router = require('express').Router()
const auth = require('../utils/auth')

//router.get('/create', auth(), controllers.article.get.create)
router.post('/create', controllers.article.post.create)

router.get('/all',  controllers.article.get.all)
router.get('/all/newest',  controllers.article.get.sortDate)

router.get('/details/:id',  controllers.article.get.details)

router.post('/like/:id',  controllers.article.post.like)

router.get('/edit/:id', auth(),  controllers.article.get.edit)
router.post('/edit/:id', auth(),  controllers.article.post.edit)
router.get('/delete/:id', auth(),  controllers.article.get.delete)

router.post('/search',  controllers.article.post.search)

module.exports=router