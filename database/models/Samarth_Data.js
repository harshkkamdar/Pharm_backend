const mongoose = require('mongoose');

const SamarthSchema = new mongoose.Schema({
    Composition:{
        type: String,
        trim: true,
    },
    MRP: {
        type: String,
        trim: true,
    },
    Offer: {
        type: String,
        trim: true,
    },
    Brand: {
        type: String,
        trim: true,
    }
});

const Samarth = mongoose.model('Samarth', SamarthSchema)

module.exports = Samarth;