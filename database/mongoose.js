const mongoose  = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://harshkkamdar:kWPrZpRPt3Yl3nz5@pharmacy.oflsnjx.mongodb.net/',{useNewURLParser: true, useUnifiedTopology: true})
.then(() => console.log("Database Connected..."))
.catch((error) => console.log(error));

module.exports = mongoose;