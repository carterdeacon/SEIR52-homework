const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please supply name"],
    },
    email: {
        type: String,
        required: [true, "Please supply email address"],
        unique: true
    },
    password: {
       type: String,
       required: [true, "Please supply a password"], 
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);