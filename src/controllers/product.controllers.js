const Product = require('../models/product.model')

const createProducts = async(req, res)=>{  

  const {title, description, value, image, category, quantity} = req.body;
  try {
      const product = new Product({title, description, value, image, category, quantity, user: res.locals.user});
      await product.save()
      res.status(200).json(product)      
      
  } catch (error) {
    throw new Error(error)      
  }
}

const showProducts = async (req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)        
    } catch (error) {
        throw new Error(error)
    }
}

const getProduct = async (req, res)=>{
    const {id} = req.params
    try {
      const product = await Product.findById(id)
      res.status(200).json(product)
      
    } catch (error) {
      throw new Error(error)
      //res.status(400).json({ error })     
    }
  
  }
module.exports = {
    createProducts,
    showProducts,
    getProduct
}