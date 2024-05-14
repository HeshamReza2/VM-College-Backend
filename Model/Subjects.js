const mongoose = require('mongoose')

const Subjects = new mongoose.Schema({
    subject: { type: String },
    capacity: {
        type: Number,
        default: 0
    },
    fees: {
        courseType: {
            type: String,
            default: 'UG'
        },
        amount: {
            type: Number,
            default: 0
        },
        semester: { type: String }
    }
})

module.exports = mongoose.model('Subjects', Subjects)