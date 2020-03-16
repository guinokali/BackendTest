const express = require("express");
const app = express();
const cors = require('cors');
var mongoose = require('mongoose');

const bodyParser = require("body-parser");






app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json());


const productRoutes = require('./routes/product-route.js');
app.use('/product', productRoutes);


app.listen(8080, () => {
    mongoose.connection.openUri('mongodb://localhost:27017/products', { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }, (err, res) => {
        if (err) throw err;
        console.log("base de datos: \x1b[32m%s\x1b[0m", "online");
    
    })
})
