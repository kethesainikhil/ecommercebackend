const express = require('express');

const router = express.Router()
//Post Method
const User = require('../models/userModel')
const electronics = require("../models/electronicsModel");
const clothing = require('../models/clothingModel');
const shoeModel = require('../models/shoeModel');
const accessoriesModel = require('../models/accessoriesModel');
const { default: mongoose } = require('mongoose');
const clothingModel = require('../models/clothingModel');
const cartItem = require("../models/cartItems")
router.post('/signup', async (req, res) => {
    const data = new User({
        email: req.body.email,
        password:req.body.password
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.send(error)
    }
})
router.post('/login', async (req, res) => {
    try{
        console.log(req.body,"request body")
        const email = req.body.email;
        const checkEmail = await User.findOne({email});
        if(checkEmail){
            const password = req.body.password;
            console.log(checkEmail,"check email")
            if(password === checkEmail.password){
                res.send(checkEmail)
            }
            else{
                res.send('Wrong Password')
            }
        }
        else{
            res.send('User does not exist')
        }
    }
    catch(error){
        res.send(error)
    }
})

//Get all Method
router.get('/electronics', async (req, res) => {
    const data = await electronics.find();
    res.send(data)
})
router.get('/clothing', async (req, res) => {
    const data = await clothing.find();
    res.send(data)
})
router.get('/shoes', async (req, res) => {
    const data = await shoeModel.find();
    res.send(data)
})
router.get('/accessories', async (req, res) => {
    const data = await  accessoriesModel.find();
    res.send(data)
})


//Get product by  ID Method
router.get('/:productCategory/:ProductId', async (req, res) => {
    const category = req.params.productCategory
    const model = mongoose.model(category);
    const data = await model.find({ id: req.params.ProductId });
    console.log(data)
    res.send(data)
})




// router.get('/hello', async (req, res) => {
//     const user = await cartItem.findOne({ id: 12 })
//     if(user){
//         res.send(user)
//     }
//     else{
//         res.send("hello world")
//     }

// })



//update quantity

router.put('/update', async (req, res) => {
    try {
      // Update all documents in the collection
      const updateResult = await clothingModel.updateMany({}, { $set: { quantity: 1 } });
  
      // Check the result and send a response
      if (updateResult.modifiedCount > 0) {
        res.status(200).json({ message: 'Items updated successfully' });
      } else {
        res.status(404).json({ message: 'No items found for updating' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });



module.exports = router;