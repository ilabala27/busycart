const products = require('../data/products.json');
const product = require('../models/productmodel');
const dotenv= require('dotenv');
const createDatabase =require('../config/database');

dotenv.config({path:'backend/config/config.env'})


createDatabase();


const seeder = async () => {
    try{
        await product.deleteMany();
    console.log("all data deleted");
   await  product.insertMany(products);
    console.log("all data instered");
    }catch(err){
        console.log(err);
    }
    process.exit();
}

seeder();