

const ProductsModels = require('../models/productsSchema');
const UsersModels = require('../models/usersSchema');

const productController = async(req,res) =>{
  const product = await ProductsModels.find({}, { __v: 0 });
   return res.json({"result":product})
}


const authController = async(req,res)=>{
  const {email,password} = req.body;
  const user = await UsersModels.findOne({email});
  if(!user) return res.status(500).json({"result": "no existe usuario"})
  if(user.password == password) return res.json({"result": "usuario correcto"})
  return res.status(500).json({"result": "error en las credenciales"})
}
const addProductController = async(req,res)=>{
  const {codigo,nombre,cantidad,precio} = req.body;
  const producto = await ProductsModels.findOne({codigo});
  if(producto) return res.json({"result": "producto ya existe"});
  if(cantidad <= 0){
    return res.json({"result": "la cantidad tiene que ser mayor a 0"});
  }
  if(precio <= 0){
    return res.json({"result": "la precio tiene que ser mayor a 0"});
  }
  if(!nombre) return res.json({"result": "falta nombre"});
  let product = new ProductsModels();
  product.codigo = codigo;
  product.nombre = nombre;
  product.cantidad = cantidad;
  product.precio = precio;
  let resp = await product.save();
  console.log("res ",resp);
  

  return res.json({"result": "ok"});

}




module.exports = {
 "productController": productController,
 "authController":authController,
 "addProductController":addProductController
};