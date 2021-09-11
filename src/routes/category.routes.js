const router = require('express').Router();
const validation = require('../middlewares/validationMiddleware')
const categorySchema = require('../validations/category.validation')


const {createCategory, showCategories, getCategory, updateCategories} = require('../controllers/category.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

router.get('/categories',authTokenValidator, showCategories)

router.post('/categories', validation(categorySchema), authTokenValidator, createCategory)

router.post('/categories/:id', authTokenValidator, getCategory)

router.put('/categories/:id', validation(categorySchema), authTokenValidator, updateCategories)


module.exports = router;