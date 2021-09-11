const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  
    title: {
    type: String,
    unique: true,
    require:true
  },
  description:{
    type: String,
    require: true
  },   
  products:[{
    type: mongoose.Schema.Types.ObjectId,    
    ref: 'Product'
  }]
})

module.exports = mongoose.model('Category', CategorySchema);
