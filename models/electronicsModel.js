const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    image_url: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('electronics', electronicSchema)