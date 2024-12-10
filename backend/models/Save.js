const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema
module.exports= mongoose.model('Data', DataSchema);


