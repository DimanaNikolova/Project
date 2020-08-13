const config = require('../config/config')
const { Article } = require('../models')
const { User } = require('../models')
//const { use } = require('../routers/article')

module.exports = {
    get: {
        create: (req, res, next) => {
            res.render('create.hbs', { pageTitle: "Create article" })
        },
        sortDate: (req, res, next) => {
            Article.find()
                .sort('-creationDate')
                .lean()
                .then(articles => {
                    // articles.forEach(a => {
                    //     a.description = a.description.split(' ').slice(0, 50).join(' ')
                    // });
                    res.send(articles)
                })
        },
        all: (req, res, next) => {
            Article
                .find({})
                .lean()
                .then((articles) => {

                    res.send(articles)
                })
        },
        details: (req, res, next) => {
            const id = req.params.id
            Article
                .findById(id)
                .lean()
                .then(article => {
                    User.findById(article.articleAuthor).then(user => {
                        res.send({ article, user })
                    })
                    // article.isAuthor = article.articleAuthor.toString() === req.user._id.toString()
                    // res.render('article.hbs', { article, id })
                }).catch(() => {
                    Article.find()
                        .sort('-creationDate')
                        .limit(3)
                        .lean()
                        .then(articles => {
                            articles.forEach(a => {
                                a.description = a.description.split(' ').slice(0, 50).join(' ')
                            });
                            res.render('index.hbs', { articles, message: "You need to be logged in to read the article!" })
                        })
                })
        },
        edit: (req, res, next) => {
            const id = req.params.id
            Article.findById(id)
                .lean()
                .then((article) => {
                    res.render('edit.hbs', { article })
                })
        },

        delete: (req, res, next) => {
            const id = req.params.id
            Article
                .findByIdAndRemove(id)
                .then(() => {
                    res.redirect('/article/all')
                })
        }
    },
    post: {
        create: (req, res, next) => {
            const { title, content, image, category, user } = req.body;

            Article
                .create({ title, content, image, category, articleAuthor: user.userId })
                .then((data) => {
                    res.send(data)
                    User.update(
                        { _id: user.userId },
                        { $push: { createdArticles: data._id } }
                    ).then(response => {
                        console.log(response);
                    }).catch(e => {
                        console.log(e);
                    })
                })

                .catch((err) => {
                    if (err.code === 11000 || err.name === "ValidationError") {
                        const message = Object.entries(err.errors).map(tuple => {
                            return res.send({ message: tuple[1].message })
                        })
                    }

                })
        },
        edit: (req, res, next) => {
            const { description } = req.body
            const id = req.params.id
            Article.findByIdAndUpdate({ _id: id }, { description })
                .then((article) => {
                    res.redirect(`/article/details/${id}`)
                })
        },
        search: (req, res, next) => {
            const { searched } = req.body
            Article
                .find({})
                .lean()
                .then((articles) => {
                    let searchedArticles = articles.filter(a =>
                        a.title.toLowerCase().includes(searched.toLowerCase())
                    )
                    console.log(searchedArticles);
                    res.send({ articles: searchedArticles, searched })
                }).catch(e => {
                    res.send({ message: 'Something went wrong' })
                    console.log(e);
                })
        },
        like: (req, res, next) => {
            const { currentArticleId, currentUserId } = req.body;
            User.findById(currentUserId).then((user) => {
                if (user.createdArticles.includes(currentArticleId)) {
                    return res.send({ message: "You can't like your own article" })
                }
                else if (user.likedArticles.includes(currentArticleId)) {
                    return res.send({ message: "You've already liked this article" })
                }
                else {
                    Promise.all([
                        User.updateOne({ _id: currentUserId }, { $push: { likedArticles: currentArticleId } }),
                        Article.updateOne({ _id: currentArticleId }, { $push: { likedBy: currentUserId } })
                    ]).then((response) => {
                        console.log(response);
                        console.log("tva e ot then");
                        res.send({ alreadyLiked: true })
                    }).catch((err) => {
                        console.log("tva e ot catch");
                        console.log(err)
                        res.send({ message: 'Vliza v ke4a' })
                    })
                }

            })


        },
    }
}