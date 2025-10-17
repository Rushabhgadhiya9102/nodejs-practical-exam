const express = require('express')
const dotenvx = require('./configs/configs')
const bodyParser = require('body-parser')
const database = require('./configs/database')
const router = require('./routers')
const cookieParser = require('cookie-parser')
const port = dotenvx.port

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
app.use('/', router)

app.listen(port, (error)=>{

    if(error){
        console.log(error.message);
        
    }else{

        database
        console.log('server is started')
        console.log('http://localhost:' + port)
    }

})