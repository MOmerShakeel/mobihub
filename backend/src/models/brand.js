const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    brandImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Brand", brandSchema);