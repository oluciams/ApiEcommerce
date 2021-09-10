const router = require('express').Router();

const {createProducts, showProducts, getProducts, updateProducts, deleteProducts} = require('../controllers/product.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

router.get('/products', showProducts)

//router.post('/products', authTokenValidator, createProducts)
router.post('/products', createProducts)

router.post('/products/:id', getProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)

module.exports = router;

