const Product = require('../models/product.model')
const Category = require('../models/category.model')
const getUserIdByToken = require ('../utils/getUserIdByToken')


const createProducts = async(req, res)=>{  

  // const token = req.headers.authorization

  // const userId = getUserIdByToken(token)
  const userId = "612e599e1f5d0d519b85fe69"

  const {title, description, price, image, categoryId, quantity} = req.body;
  const category = await Category.findById(categoryId)
  try {
      const product = new Product({title, description, price, image, categoryId, quantity, user: userId});
      
      const savedProduct = await product.save()
      //adiciono el producto creado al arreglo de productos de esa categoria
      category.products= category.products.concat(savedProduct._id)
      await category.save()       
      res.status(201).json(savedProduct)       
      
  } catch (error) {
    res.status(400).json(error)     
  }
}

const showProducts = async (req, res)=>{  

    try {
      if(req.query.category){ 
        const categoryId = req.query.category 
        const products = await Product.find({categoryId}).populate('category')       
        res.status(200).json(products) 
      }else{
        const products = await Product.find({}).populate('category')
        res.status(200).json(products) 
        
      }
      } catch (error) {
        res.status(403).json(error)
      }
}

const getProducts = async (req, res)=>{
    const {id} = req.params
    try {
      const product = await Product.findById(id)
      res.status(200).json(product)
      
    } catch (error) {
      res.status(403).json(error)          
    }  
  }

  const updateProducts =  async(req, res)=>{
    const {id} = req.params
    let {title, description, price, image, categoryId, quantity} = req.body

    try{    
        let product = await Product.findByIdAndUpdate(id, {title, description, price, image, categoryId, quantity})
        product = await Product.findById(id)
        res.status(200).json(product)        
    }catch (error) {
        res.status(403).json(error)
    }
  }

   const deleteProducts = async (req, res) => {
    try {        
        const { id } = req.params;
        await Product.deleteOne({_id:id }) 
        res.status(200).json({message: 'Product deleted successfully'})
    }catch (error) {
        res.status(401).json(error)
    }
}

module.exports = {
    createProducts,
    showProducts,
    getProducts,
    updateProducts, 
    deleteProducts
  }