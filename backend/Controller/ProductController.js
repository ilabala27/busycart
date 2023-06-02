const product = require('../models/productmodel')

// get all products

exports.getProducts = async(req, res, next)=>{
    const products = await product.find();
    res.status(200).json({
        sucess: true,
        count: products.length,
        products
    })
}

// get one product

exports.newProduct = async (req, res, next) =>{
   const productnew =  await product.create(req.body);
   res.status(201).json({
    success: true,
    productnew
   })

}

//create product

exports.getOneProduct = async(req, res, next)=>{
   const oneProduct = await product.findById(req.params.id);

   if(!oneProduct){
   return res.status(404).json({
        success: false,
        message:"product not found"
    });
   }

   res.status(201).json({
    success: true,
    oneProduct
   })
}

