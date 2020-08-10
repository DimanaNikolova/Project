const mongoose = require('mongoose');
const Model = mongoose.model

const articleSchema = new mongoose.Schema({
    title:{
        type: mongoose.SchemaTypes.String,
        required:[true, 'Title is required!'],
        unique:[true, 'Article with such name already exists!'],
        minlength:[5, 'Title should be at least 5 characters long!']
    },
    content:{
        type: mongoose.SchemaTypes.String,
        required:[true, 'Content is required!'],
        minlength:[20, "Content should be at least 20 characters long!"]
    },
    image:{
        type: mongoose.SchemaTypes.String,
        required:[true, 'Image URL is required!']
    },
    category:{
        type: mongoose.SchemaTypes.String,
        required:[true, 'Category is required!']
    },
    articleAuthor:{
        type: mongoose.SchemaTypes.ObjectId, ref: 'User'
    },
    creationDate:{
        type: mongoose.SchemaTypes.Date, default:Date.now
    },
    likedBy: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]
})
module.exports = new Model('Article', articleSchema)