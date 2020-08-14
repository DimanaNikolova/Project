const { User } = require('../models')
const { Article } = require('../models')
const { TokenBlacklist } = require('../models')
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'dgimjbkbh',
    api_key: '814129772125818',
    api_secret: '0VmKZnjopGFSOtSnMN-JFLF_tmM'
})

const jwt = require('../utils/jwt')
const config = require('../config/config')

module.exports = {
    get: {
        login: (req, res, next) => {
            if (req.cookies[config.cookie] === undefined) {

                res.render('login.hbs', { pageTitle: "Login" })
            }
            else {
                res.render('404.hbs', { notFound: 'You are already logged in!' })

            }

        },
        register: (req, res, next) => {
            if (req.cookies[config.cookie] === undefined) {
                res.render('register.hbs', { pageTitle: "Register" })
            }
            else {
                res.render('404.hbs', { notFound: 'You are already logged in!' })

            }

        },
        profile: (req, res, next) => {
            const id = req.params.id


            Article.find({ likedBy: id }).then(likedBy => {

                Article.find({ articleAuthor: id }).then(createdBy => {
                    res.send({ likedBy, createdBy })
                })
            })


        },
        logout: (req, res, next) => {
            res
                .clearCookie(config.cookie)
                .clearCookie('username')
                .redirect('/home/')

        }
    },
    post: {
        login: (req, res, next) => {
            const { username, password } = req.body;
            User.findOne({ username }).then((user) => {
                Promise.all([user, user.matchPassword(password)])
                    .then(([user, match]) => {
                        if (!match) {
                            res.message = "Invalid username!"
                            redirect('/user/login')
                            return;

                        }
                        const token = jwt.createToken({ id: user._id })
                        res.cookie('x-auth-token', token)
                            .cookie('username', username)
                        res.header('Authorization', token).send(user);
                    }).catch((err) => {

                        res.send({
                            message: "Username or password is invalid!"
                        });
                    })
            }).catch((err) => {
                res.send({
                    message: "Username or password is invalid!",
                    oldInput: { username, password }
                });
            })

        },
        verifyLogin: (req, res, next) => {
            const token = req.body.token || '';

            Promise.all([
                jwt.verifyToken(token),
                TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    console.log(err);

                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    })
                })
        },
        register: (req, res, next) => {
            const { username, password, rePassword } = req.body;
            if (password !== rePassword) {
                return res.send({ message: 'Passowrds do not match' })
            }

            User.create({ username, password })
                .then((registeredUser) => {
                    res.send(registeredUser)
                }).catch((err) => {
                    console.log(err);
                    if (err.code === 11000 || err.name === "ValidationError") {
                        const message = Object.entries(err.errors).map(tuple => {
                            return tuple[1].message
                        })
                        res.send({
                            message: "Username or password is invalid!"
                        });
                    }

                })


        }, profilePic: (req, res, next) => {
            const { file, userId } = req.body
            file.mv('./uploads/' +file.name, function(err,result){
                if (err){
                    res.send({message: 'something went wrong'})
                } res.send({
                    success:true,
                    message: "Profile picture updated"
                })
                
            })
            // User.findByIdandUpdate({id},{profilePic: ""})
            // .then(data=>{
            //     res.send(data)
            // })
        },
    }
}