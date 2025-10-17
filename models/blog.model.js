const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true
    },

    content: {
        type: String,
        trim : true
    },

    category : {
        type: String,
        trim : true
    },
    author :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserData'
    }
    
}, {
    timestamps : true
})

const BlogData = mongoose.model('BlogData', blogSchema)
module.exports = BlogData