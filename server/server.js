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
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

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
// Middlewares
//=================
const { auth } =  require('./middleware/auth')


//=================
// USERS
//=================

// Auth route
app.get("/api/users/auth", auth, (req, res) => {
    // If auth is ok - send some response
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})

// Register route
app.post('/api/users/register', (req, res) => {
    // create new user schema
    const user = new User(req.body)

    // Store user in MongoDB
    user.save((err, doc) => {
        if (err) {
            console.log(err)
            return res.json({
                success: false,
                err
            })
            
        }
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})


// Login route
app.post("/api/users/login", (req, res) => {
    // Find the email in the database
    User.findOne({'email': req.body.email}, (err, user) => {
        if(!user) return res.json({ loginSuccess: false, message: "Auth failed, email not found!" })
        // If email exists grab password and check the password
        user.comparePassword(req.body.password, (err, isMatch) => {
            // if password does not match with the hashed password
            if (!isMatch) return res.json({
                loginSuccess: false,
                message:"Wrong password"
            })
            // If password and email are correct, generate a new token
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err)
                // If everything is ok, store as cookie
                // It's safe, once they log out, the cookie becomes invalid
                res.cookie('x_auth', user.token).status(200).json({
                    loginSuccess: true
                })
            }) 
        })
        
    })

// Logout route
app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, doc) => {
            if(err) return res.json({ success: false, err })
            return res.status(200).send({
                success: true
            })
        }
    )
})
    
    

    
})

// Create the server
const port = process.env.PORT || 3002


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})