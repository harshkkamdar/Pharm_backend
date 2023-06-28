const mongoose = require('mongoose');

const OurSchema = new mongoose.Schema({
    SrNo:{
        type: String,
        trim: true,
    },
    Item_Name: {
        type: String,
        trim: true,
    },
    Drug_Name: {
        type: String,
        trim: true,
    },
    Manufacturer: {
        type: String,
        trim: true,
    },
    UOM: {
        type: String,
        trim: true,
    },
    Unit_Price: {
        type: String,
        trim: true,
    },
    MRP: {
        type: String,
        trim: true,
    },
    Order_Qty: {
        type: String,
        trim: true,
    }
});

const Our = mongoose.model('Our', OurSchema)

module.exports = Our;