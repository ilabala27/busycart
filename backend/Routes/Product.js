const express = require('express');
const { getProducts, newProduct, getOneProduct } = require('../Controller/ProductController');
const router= express.Router();

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);
router.route('/product/:id').get(getOneProduct);

module.exports= router;