const router = require('express').Router();
const validation = require('../middlewares/validationMiddleware')
const categorySchema = require('../validations/category.validation')


const {createCategory, showCategories, getCategory, updateCategories} = require('../controllers/category.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

router.get('/categories', showCategories)

router.post('/categories', validation(categorySchema), createCategory)

router.post('/categories/:id', getCategory)

router.put('/categories/:id', validation(categorySchema), updateCategories)


module.exports = router;