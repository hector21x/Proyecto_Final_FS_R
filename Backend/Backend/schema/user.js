const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true
        },
        password: {
            type: Number,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
            require: true
        }
    }, {
    timestamps: true,
    versionKey: false
})

module.exports = userSchema;