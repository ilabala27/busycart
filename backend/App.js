const express = require('express');
const app = express();

app.use(express.json());

const products =require('./Routes/Product');



app.use('/api/v1/',products);


module.exports = app;