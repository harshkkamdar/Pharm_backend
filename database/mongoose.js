const mongoose  = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Harsh:admin@clusternyx.3vqwyny.mongodb.net/Pharm_Database',{useNewURLParser: true, useUnifiedTopology: true})
.then(() => console.log("Database Connected..."))
.catch((error) => console.log(error));

module.exports = mongoose;