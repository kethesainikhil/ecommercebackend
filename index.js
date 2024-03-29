const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const env = require("dotenv").config();
mongoose.connect(process.env.MONGOURL);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors(
    {
        origin: "*",
    }
));
app.use(express.json());

const routes = require("./routes/routes")
const cartRoutes = require("./routes/cartRoutes")
app.use("/",routes)
app.use("/cart",cartRoutes)






app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})