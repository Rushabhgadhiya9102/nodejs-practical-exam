const bcrypt = require('bcrypt')
const UserData = require('../models/user.model')
const jwt = require('jsonwebtoken')
const dotenvx = require('../configs/configs')

exports.signupProcess = async (req,res)=>{

    try {
        
        const {password, confirmPassword} = req.body
        
        if(password === confirmPassword){

            req.body.password = await bcrypt.hash(req.body.password, 10)
            await UserData.create(req.body)
            return res.redirect('/authentication-login')

        }

    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/')
        
    }

}

exports.loginProcess = async (req,res)=>{

    try {
        
        const {email, password} = req.body
        const user = await UserData.findOne({email})

        if(user){

            const isValid = await bcrypt.compare(password, user.password)

            if(isValid){

                const payload = {
                    id : user.id
                }

                const token = jwt.sign(payload, dotenvx.secret_key)
                res.cookie('token', token)

                return res.redirect('/')
            }

        }else{
            console.log("user is not found");
            
        }


    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/')
        
    }

}

exports.logout = (req,res)=>{
    
    res.clearCookie()
    return res.redirect('/authentication-login')
}