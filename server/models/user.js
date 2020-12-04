const mongoose = require('mongoose')

// Encrypt password string
const bcrypt = require("bcrypt")

const jwt = require('jsonwebtoken')

const SALT_I = 10;

require('dotenv').config()

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 100
    },
    cart: {
        type: Array,
        default: [],
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String,

    }
})

userSchema.pre('save', function(next) {
    var user = this

    bcrypt.genSalt(SALT_I, function(err, salt) {
        if (err) return next(err)
        // else
        if (user.isModified()) {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err)
                user.password = hash
                next()
            })
        } else {
            next()
        }
        
    })
})

// Method to compare passwords
userSchema.methods.comparePassword = function(candidatepassword, cb){
    bcrypt.compare(candidatepassword, this.password, function(err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

// Generate token
userSchema.methods.generateToken = function(cb){
    var user = this
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET)

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }