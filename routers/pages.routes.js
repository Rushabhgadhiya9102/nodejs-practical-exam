const express = require('express')
const pagesRouter = express.Router()
const pagesClt = require('../controllers/pages.contorllers')
const userAuth = require('../middleware/userAuth')

pagesRouter.get('/',userAuth, pagesClt.homepage)
pagesRouter.get('/addBlog', pagesClt.addBlogpage)
pagesRouter.get('/editBlog', pagesClt.editBlogpage)
pagesRouter.get('/tables', pagesClt.BlogListpage)
pagesRouter.get('/authentication-login', pagesClt.authLoginpage)
pagesRouter.get('/authentication-register', pagesClt.authRegisterpage)


module.exports = pagesRouter