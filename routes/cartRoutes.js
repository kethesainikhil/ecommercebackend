const express = require('express');

const cartRouter = express.Router()
//Post Method
const { default: mongoose } = require('mongoose');
const cartItem = require("../models/cartItems")
const User = require('../models/userModel');

//get cart items
cartRouter.get('/cartItems/:userId', async (req, res) => {
    const userId = req.params.userId
    const model = mongoose.model("cartItem");
    const data = await model.find ({ userID: req.params.userId });
    console.log(data)
    res.send(data)
})

// add to cart
cartRouter.post('/addtocart', async (req, res) => {
    const user = await User.findOne({ _id: req.body.userId })
    const category = req.body.category
    const model = mongoose.model("cartItem");
    console.log(req.body)
   try{
    if(user){
        const data = new model({
            userID: req.body.userId,
            id: req.body.id,
            title: req.body.title,
            image_url: req.body.image_url,
            price: req.body.price,
            quantity: req.body.quantity,
            category:req.body.category
        })

        try{
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch(error){
            res.send(error)
        }
    }
   }
   catch(error){
    res.send(error)
   }
})

//delete from cart
cartRouter.delete('/deleteItem', async (req, res) => {
    const category = req.body.category
    const model = mongoose.model("cartItem");
    const dataTodelte = await model.deleteOne({ _id: req.body.cartId })
    res.send(dataTodelte)
})
cartRouter.patch('/updateItem', async (req, res) => {
    const filter = { _id: req.body.cartId };
const update = {
  $set: {
    quantity: req.body.quantity,
    price:req.body.price
    // Add more fields as needed
  }
};

    const model = mongoose.model("cartItem");
    const dataTodelte = await model.updateOne(filter, update)
    res.send(dataTodelte)
})




module.exports = cartRouter;