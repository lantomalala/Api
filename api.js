const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


app.use(bodyParser.json());
//connect DB
mongoose.connect("mongodb://localhost:27017/testdb");

// page d'accuel
app.get('/', (req, res) => {
    res.send("hello word");
});
app.listen(3030);

//router import
const postsRoute = require('./rooter/posts'); 
app.use('/posts', postsRoute );
