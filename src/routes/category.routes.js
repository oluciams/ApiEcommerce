const router = require('express').Router();

const authTokenValidator = require('../middlewares/authTokenValidator')
const validation = require('../middlewares/validationMiddleware')
const categorySchema = require('../validations/category.validation')

const {createCategory, showCategories, getCategory, updateCategories} = require('../controllers/category.controllers');


router.get('/categories', authTokenValidator, showCategories)

router.post('/categories', authTokenValidator, validation(categorySchema), createCategory)

router.get('/categories/:id', authTokenValidator, getCategory)

router.put('/categories/:id', authTokenValidator, validation(categorySchema), updateCategories)


module.exports = router;