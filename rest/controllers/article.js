const config = require('../config/config')
const { Article } = require('../models')
const { User } = require('../models')

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
            // Article
            //     .find({})
            //     .select('title description articleAuthor')
            //     .lean()
            //     .then((articles) => {
            //         res.render('all-articles.hbs', { articles })
            //     })
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
                    User.findById(article.articleAuthor).then(user=>{
                        res.send({article,user})
                    })
                    // article.isAuthor = article.articleAuthor.toString() === req.user._id.toString()
                    // res.render('article.hbs', { article, id })
                }).catch(()=>{
                    Article.find()
                    .sort('-creationDate')
                    .limit(3)
                    .lean()
                    .then(articles => {
                        articles.forEach(a => {
                            a.description = a.description.split(' ').slice(0, 50).join(' ')
                        });
                        res.render('index.hbs',{articles, message: "You need to be logged in to read the article!"})
                    })
                })
        },
        edit:(req,res,next)=>{
            const id =req.params.id
            Article.findById(id)
            .lean()
            .then((article)=>{
                res.render('edit.hbs', {article})
            })
        },
        delete:(req,res,next)=>{
            const id =req.params.id
            Article
            .findByIdAndRemove(id)
            .then(()=>{
                res.redirect('/article/all')
            })
        }
    },
    post: {
        create: (req, res, next) => {
            const { title, content, image,category, user  } = req.body;
            console.log(title, content, image,category);
            console.log(user)
            Article
                .create({ title, content, image,category, articleAuthor: user.userId})
                .then((data) => {
                    // data about the created user
                    //req.user.createdArticles.push(data._id)
                    res.send(data)
                    User.update(
                        { _id: user.userId }, 
                        { $push: { createdArticles: data._id } }
                    )


                   // return User.findByIdAndUpdate({ _id: req.user.userId }, req.user)
                })
                // .then((updatedUser) => {
                //     // data about the relations
                //     res.redirect('/')
                // })
                .catch((err) => {
                    console.log(err);
                    if (err.code === 11000 || err.name === "ValidationError") {
                        const message = Object.entries(err.errors).map(tuple => {
                            return tuple[1].message
                        })
                      //  res.render('create.hbs', { message, oldInput: {title, description} })
                    }

                })
        },
        edit:(req,res,next)=>{
            const {description}=req.body
            const id =req.params.id
            Article.findByIdAndUpdate({_id: id}, {description})
            .then((article)=>{
                res.redirect(`/article/details/${id}`)
            })
        },
        search: (req,res, next)=>{
            const {search} = req.body
            Article
            .find({})
            .select('title')
            .lean()
            .then((articles)=>{
                let searchedArticles = articles.filter(a=>
                    a.title.toLowerCase().includes(search.toLowerCase())
                )
               
                res.render('search-results.hbs',{articles: searchedArticles, search})
            })
        }
    }
}