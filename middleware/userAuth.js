const dotenvx = require("../configs/configs");
const jwt = require('jsonwebtoken')

const userAuth = (req,res, next)=>{

    const token = req.cookies.token

    if(token){
        const decode = jwt.verify(token,dotenvx.secret_key)
        req.user = decode 
        return next()
    }else{
        console.log('please login');
        return res.redirect('/authentication-login')
    }

}

module.exports = userAuth