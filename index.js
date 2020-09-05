const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./server/routes/userRoute');
const routess = require('./server/routes/posts');
require('dotenv').config();

const port = process.env.PORT || 3000;

//connect mongodb to node app using connect method
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection; //store connection into variable db

//veryfying connection
db.once('open', _ => {
    console.log('databse connected:', url);
});

db.on('error', (err) => {
    console.error('connection failed:', err);
});

app.use(bodyParser.json()); //convert to json
// app.use(express.json());


//middleware
app.use("/auth", userRoutes);


app.listen(port, () => {
    console.log('Server is running...')
});

app.get('/', (req, res) => {
    res.send("Welcome to the EDU Landrover API")
})


