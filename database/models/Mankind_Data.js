const mongoose = require('mongoose');

const MankindSchema = new mongoose.Schema({
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

const Mankind = mongoose.model('Mankind', MankindSchema)

module.exports = Mankind;