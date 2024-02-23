const mongoose = require('mongoose');

const cartItems = new mongoose.Schema({
    "userID":{
        required:true,
        type:String
    },
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
    },
    "category":{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('cartItem', cartItems)