const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect("mongodb+srv://nikhil:note5pro@nikhilcluster.i4hulcy.mongodb.net/?retryWrites=true&w=majority");
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
        origin: "http://localhost:5173",
    }
));
app.use(express.json());

const routes = require("./routes/routes")


app.use("/",routes)






app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})