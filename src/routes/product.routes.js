const router = require('express').Router();

const authTokenValidator = require('../middlewares/authTokenValidator')
const validation = require('../middlewares/validationMiddleware')
const productSchema = require('../validations/product.validation')

const {createProducts, showProducts, getProducts, updateProducts, deleteProducts} = require('../controllers/product.controllers');

router.get('/products', showProducts)

router.post('/products', authTokenValidator, validation(productSchema), createProducts)

router.get('/products/:id', getProducts)

router.put('/products/:id', authTokenValidator, validation(productSchema), updateProducts)

router.delete('/products/:id', authTokenValidator, deleteProducts)

module.exports = router;

