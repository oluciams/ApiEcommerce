const router = require('express').Router();

const {createCategory, showCategories, getCategory, updateCategories} = require('../controllers/category.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

router.get('/categories', showCategories)

router.post('/categories', createCategory)

router.post('/categories/:id', getCategory)

router.put('/categories/:id', updateCategories)


module.exports = router;