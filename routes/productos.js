const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/', productController.getProductos);

module.exports = router;
