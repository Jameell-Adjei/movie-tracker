const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    title: {
        type: String,
        required: true
    },
    
    desc: {
        type: String
    },

    rating: {
        type: Number
    },

    date_logged: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);