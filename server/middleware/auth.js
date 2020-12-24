const { User } = require('../models/user')

// Return a function
let auth = (req, res, next) => {
    let token = req.cookies.x_auth;

    // Check if the token is Ok
    User.findByToken(token, (err, user) => {
        if(err) throw err
        // if no user
        if(!user) return res.json({
            isAuth: false,
            error: true
        })
        // If token is correct and user is allowed to login
        req.token = token
        req.user = user
        next()
    }) 
        

}

module.exports = { auth }