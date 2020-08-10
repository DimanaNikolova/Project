const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const config = require('../config/config')
const cors = require('cors');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        layoutsDir: 'views',
        defaultLayout: 'main-layout',
        partialsDir: 'views/partials',
        extname: 'hbs'
    }));

    app.use(cors({
        exposedHeaders: 'Authorization'
    }));

    app.use(express.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('view engine', 'hbs');

    app.use(express.static('./static'));

    app.use(cookieParser());
    app.use((req, res, next) => {
        res.locals.isLoggedIn = req.cookies[config.cookie] !== undefined
        res.locals.username = req.cookies['username']
        next()
    })

    app.use(bodyParser.urlencoded({ extended: true }));
};

