const express = require('express')
const authRouter = express.Router()
const authClt = require('../controllers/user.controllers')

authRouter.post('/register', authClt.signupProcess)
authRouter.post('/login', authClt.loginProcess)
authRouter.get('/logout', authClt.logout)

module.exports = authRouter