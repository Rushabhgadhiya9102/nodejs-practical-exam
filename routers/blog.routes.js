const express = require('express')
const blogRouter = express.Router()
const blogClt = require('../controllers/blog.contorllers')

blogRouter.post('/addBlog', blogClt.createBlog)
blogRouter.get('/delete/blog/:id', blogClt.deleteBlog)
blogRouter.get('/edit/blog/:id', blogClt.showEditBlog)
blogRouter.post('/edit/blog/:id', blogClt.updateBlog)

module.exports = blogRouter