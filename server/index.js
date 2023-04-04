var express = require('express')
const dotenv= require('dotenv')
const color= require('colors')
var conn = require('./config/db')
const userRouter = require('./routes/user')
const errorHandler = require('./error/error')


var app = express()

//body parser
app.use(express.json())

//Env configuration
dotenv.config({path:'./config/config.env'})

//Port
const port = process.env.PORT || 3000 

//Db connection
conn()

//user router
app.use('/users',userRouter);


//Error handling Middle ware
app.use(errorHandler)

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`.yellow.bold))