const Category = require('../models/category.model')

const showCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).populate('products');
        res.status(200).json({success: true, categories})
    }catch (error) {
        res.status(403).json({success: false, error })
    }
}

const createCategory = async (req,res)=>{
    const { title, description } = req.body;
    try{
        const category = await new Category({title, description});
        await category.save()
        res.status(201).json({success: true, category})    
    }catch (error) {
        res.status(400).json({success: false, error})
    }
}    

const getCategory = async (req, res)=>{
    const {id} = req.params
    try {
      const category = await Category.findById(id)
      res.status(200).json({success: true, category})      
    } catch (error) {
      res.status(403).json({success: false, error })          
    }  
  }

const updateCategories =  async(req, res)=>{
    const {id} = req.params
    let {title, description} = req.body    
    try{    
        const category = await Category.findByIdAndUpdate(id, {title, description})
        res.status(200).json({success: true, category})        
    }catch (error) {
        res.status(403).json({success: false, error})
    }
}


module.exports = {
    createCategory,
    showCategories,
    getCategory,
    updateCategories
    
}