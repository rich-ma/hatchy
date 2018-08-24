const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(()=> console.log("Successfully connected to mongoDB")).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello Phteven!'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));