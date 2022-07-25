const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// CREATE PRODUCTS
router.post('/products', productsController.createProduct);

// READ PRODUCTS
router.get('/product', productsController.getAllProducts);

// router.put('/products', (req, res, next) => {
//   res.json({ name: 'zeral', email: 'zeral@gmail.com' });
//   next();
// });

// router.delete('/products', (req, res, next) => {
//   res.json({ name: 'zeral', email: 'zeral@gmail.com' });
//   next();
// });

module.exports = router;
