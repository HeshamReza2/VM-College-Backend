const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    type: {
        type: String,
        default: 'admin'
    },
    access: {
        type: Boolean,
        default: false
    },
    email: { type: String },
    mobile: { type: Number }
})

module.exports = mongoose.model('Admin', Admin)