const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static signup method
userSchema.statics.signup = async function (email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields should be filled !!!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid !!!')
    }
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("Email alreay in use")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Weak Password !!!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ email: email, password: hash })
    return user
}

// Static login method
userSchema.statics.login = async function (email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields should be filled !!!')
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Email is incorrect !!!")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Password is Incorrect !!!')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)