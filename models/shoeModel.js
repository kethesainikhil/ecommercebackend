const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    "id": {
        required: true,
        type: Number
    },
    "title": {
        required: true,
        type: String
    },
    "image_url": {
        required: true,
        type: String
    },
    "price": {
        required: true,
        type: Number
    },
    "quantity": {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('shoes', shoeSchema)