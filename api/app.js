const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');


// Router Initial
const userRoute = require('./routes/user');

// Middleware function Declear
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


// Routing Path 
app.use('/api', userRoute);

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() =>{
        console.log("Connected To DB");
    })
    .catch((err) => {
        console.log(err);
    });

// For Run the App
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server is running on - "+ port);
});