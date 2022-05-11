const express = require('express');
const cors = require('cors');
const mongoos = require('mongoose'); //connect to mongoDB database
const { default: mongoose } = require('mongoose');

require('dotenv').config();//can have environment vairables

const app = express(); // express server
const port = process.env.PORT || 5000; // port that we're gonna use

app.use(cors()); //middleware
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});