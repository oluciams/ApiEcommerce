const Product = require('../models/product.model')
const Category = require('../models/category.model')

const createProducts = async(req, res)=>{  

  const {title, description, value, image, categoryId, quantity} = req.body;
  const category = await Category.findById(categoryId)
  try {
      const product = new Product({title, description, value, image, category: category._id, quantity, user: res.locals.user});
      
      const savedProduct = await product.save()
      //adiciono el producto creado al arreglo de productos de esa categoria
      category.products= category.products.concat(savedProduct._id)
      await category.save()  
      res.status(200).json(savedProduct)      
      
  } catch (error) {
    res.status(400).json({error })     
  }
}

const showProducts = async (req, res)=>{  

    try {
      if(req.query.category){ 
        const categoryId = req.query.category 
        const products = await Product.find({category: categoryId }).populate('category')
        res.status(200).json(products) 
      }else{
        const products = await Product.find({}).populate('category')
        res.status(200).json(products)       
      }
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

  const deleteProducts = async (req, res) => {
    try {        
        const { id } = req.params;
        await Product.deleteOne({_id:id }) 
        res.status(200).json({success: true, message: 'Product deleted successfully'})
    }catch (error) {
        res.status(400).json({success: false, message: 'Something gone wrong'})
    }
}

module.exports = {
    createProducts,
    showProducts,
    getProduct,
    updateProducts, 
    deleteProducts
  }