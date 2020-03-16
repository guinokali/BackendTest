const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    codigo :  {
        type: String,
        required: [true, "El codigo es necesario"]
    },
    nombre: {
        type: String,
        unique: true,
        required: [true, "el nombre  es necesario"]
    },
    cantidad: {
        type: Number,
        required: [true, "la cantidad es necesaria"]
    },
    precio: {
        type: Number,
        required: [true, "el precio es necesaria"]
    }

});

ProductsSchema.plugin(uniqueValidator, {
    message: "{PATH} debe ser unico"
});

module.exports = mongoose.model('products', ProductsSchema);
