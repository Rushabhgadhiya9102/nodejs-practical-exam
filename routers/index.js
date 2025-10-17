const express = require('express')
const pagesRouter = require('./pages.routes')
const blogRouter = require('./blog.routes')
const authRouter = require('./auth.routes')
const router = express.Router()

router.use('/', pagesRouter)
router.use('/', blogRouter)
router.use('/', authRouter)

module.exports = router