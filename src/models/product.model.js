const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    unique: true,
    require:true
  },
  description:{
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,    
  },
  image: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  updatedDate: {
    type: Date,   
  },
  categoryId:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
    },    
  quantity: {
    type: Number,
    require: true,
  } 
  
});

module.exports = mongoose.model('Product', ProductSchema);
