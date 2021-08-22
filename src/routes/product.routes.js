const router = require('express').Router();

const {createProducts, showProducts, getProduct, updateProducts} = require('../controllers/product.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

router.get('/products', showProducts)

router.post('/products', authTokenValidator, createProducts)

router.post('/products/:id', getProduct)

router.put('/products/:id', updateProducts)

//router.delete('/products/:id', deleteProducts)

module.exports = router;

//