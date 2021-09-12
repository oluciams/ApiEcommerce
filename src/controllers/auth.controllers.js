const User = require('../models/user.model');

const jwt = require('jsonwebtoken');

/**
 * Controller to register a new user
 * @param {Object} req 
 * @param {Object} res 
 */
const createUser = async (req, res) => {
  const { name, lastname, email, password, profilePicture } = req.body;  

  try {
    const user = await new User({ name, lastname, email, password, profilePicture });
    await user.save();
    res.status(201).json({success: true, user});
  } catch (error) {
    res.status(400).json({success: false, error}) 
  }
}


const loginUser = async (req, res) => {
  const { email, password } = req.body;  

  try {
    const user = await User.authenticate({email, password });      
    if (user) {            
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.status(200).json({success: true, token});
    } else{
      res.status(400).json({success: false, message: 'Invalid password or email'})
    }
    
  } catch (error) {
    res.status(400).json({success: false, error })
  }
}

const getUser = async (req, res)=>{
  const {id} = req.params
  try {
    const user = await User.findById(id)
    res.status(200).json({success: true, user})

  } catch (error) {
    res.status(400).json({success: false, error })    
  }
}

const updateUser = async (req, res) => {
  const id = req.params.id
  let { name, lastname, email, profilePicture} = req.body;

  try {
    let user = await User.findByIdAndUpdate(id, { name, lastname, email, profilePicture})
     user = await User.findById(id)
    res.status(201).json({success: true, user});    
  } catch (error) {
    res.status(400).json({success: false, error})
  }
} 

const deleteUser = async (req, res) => {
  const {id} = req.params
  try {
    await User.deleteOne({_id: id})
    res.status(200).json({success: true, message: 'User successfully removed'});    
  } catch (error) {
    res.status(400).json({success: false, error})    
  }    
}

const logOut = (req, res) => {  

  try {    
    console.log('logout user');
    res.status(200).json({success: true, message: 'logout user'});    
    
  } catch (error) {
    res.status(400).json({success: false, error})    
  }
}



module.exports = {
  createUser,
  loginUser,
  logOut,  
  getUser,
  updateUser,
  deleteUser
}