const express = require('express');
const {productController,authController,addProductController}  = require("../controllers/productController")
const app = express();



app.get('/alls', (req, res) => productController(req,res));
app.post('/auth', (req, res) => authController(req,res));
app.post('/add', (req, res) => addProductController(req,res));

    


module.exports = app;
