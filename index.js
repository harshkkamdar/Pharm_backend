const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Our = require('./database/models/Our_Data');
const Mankind = require('./database/models/Mankind_Data');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}));
//test

//our APIs
{
    //Get All item
    app.get('/our', (req, res) => {
        Our.find({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Add an item
    app.post('/ourOne', (req, res) => {
        (new Our({
            'SrNo': req.body.SrNo,
            'Item_Name': req.body.Item_Name,
            'Drug_Name': req.body.Drug_Name,
            'Manufacturer': req.body.Manufacturer,
            'UOM': req.body.UOM,
            'Unit_Price': req.body.Unit_Price,
            'MRP': req.body.MRP,
            'Order_Qty': req.body.Order_Qty,
            'mankind_match': req.body.mankind_match
        }))
            .save()
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Get 1 item
    app.get('/our/:Item_Name', (req, res) => {
        Our.find({ Item_Name: req.params.Item_Name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Updating our
    app.patch('/our/:Item_Name', (req, res) => {
        Our.findOneAndUpdate({ 'Item_Name': req.params.Item_Name }, { $set: req.body })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //delete item
    app.delete('/our/:Item_Name', (req, res) => {
        Our.findOneAndDelete({ 'Item_Name': req.params.Item_Name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })

    //delete item
    app.delete('/our', (req, res) => {
        Our.deleteMany({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })

    //add multiple item
    app.post('/ourMultiple', (req, res) => {
        Our.insertMany(req.body)
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })
}

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});