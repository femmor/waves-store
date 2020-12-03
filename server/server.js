const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")


// Start express in app
const app = express()
const mongoose = require("mongoose")

// configure database
require('dotenv').config()

// Setup mongoose
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE)

// body and cookie parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser())

//=================
// Models
//=================
const {User} = require('./models/user')

//=================
// USERS
//=================

// Register route
app.post('/api/users/register', (req, res) => {
    res.status(200)
})




// Create the server
const port = process.env.PORT || 3002


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})