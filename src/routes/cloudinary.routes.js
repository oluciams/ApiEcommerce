const router = require('express').Router()
const {getImages, uploadImages, deleteImages} = require('../controllers/cloudinary.controllers')

router.get('/api/images', getImages)

router.post('/api/upload', uploadImages)

router.delete('/api/images/ecommerce/:id', deleteImages)


module.exports = router