const Product = require('../models/product.model')

const createProducts = async(req, res)=>{  

  const {title, description, value, image, category, quantity} = req.body;
  try {
      const product = new Product({title, description, value, image, category, quantity, user: res.locals.user});
      await product.save()
      res.status(200).json(product)      
      
  } catch (error) {
    res.status(400).json({error })     
  }
}

const showProducts = async (req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)        
    } catch (error) {
      res.status(400).json({error })
    }
}

const getProduct = async (req, res)=>{
    const {id} = req.params
    try {
      const product = await Product.findById(id)
      res.status(200).json(product)
      
    } catch (error) {
      res.status(400).json({error })          
    }  
  }

  const updateProducts =  async(req, res)=>{
    const {id} = req.params
    let {title, description, value, image, category, quantity} = req.body

    try{    
        const product = await Product.findByIdAndUpdate(id, {title, description, value, image, category, quantity})
        res.status(200).json(product)        
    }catch (error) {
        res.status(400).json({message: false})
    }
}

module.exports = {
    createProducts,
    showProducts,
    getProduct,
    updateProducts
}