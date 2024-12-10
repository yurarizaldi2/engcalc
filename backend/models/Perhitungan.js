const mongoose = require('mongoose');

const perhitunganSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    content: String,
});

module.exports = mongoose.model('Perhitungan', perhitunganSchema);
