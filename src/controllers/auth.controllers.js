const User = require('../models/user.model');

const jwt = require('jsonwebtoken');

/**
 * Controller to register a new user
 * @param {Object} req 
 * @param {Object} res 
 */
const createUser = async (req, res) => {

  const { name, lastname, email, password, confirmationPassword, profilePicture } = req.body;
  if (!name || !lastname || !email || !password || !confirmationPassword ) {
    res.status(403).json({ error: { status: 403,
    message: 'Some fields weren\'t send, please check if the name, lastname, email, password and confirmation password ' } });
  }
  if (password !== confirmationPassword) {
    res.status(403).json({ error: { status: 403, message: 'passwords doesn\'t match' } });
  }

  try {
    const user = await new User({ name, lastname, email, password, profilePicture });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    // error.statusCode = 403
    // error.message = ' user not created'
    //FIXME: fix handling erros
    throw new Error(error);
  }
}

const loginUser = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(403).json({ error: { status: 403, message: 'email and password are required' } });
  }

  try {
    const user = await User.authenticate({email, password });  
    console.log(user)  
    if (user) {
      //TODO: validate password
      console.log(user);
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      res.status(200).json({ token });
    } 
    if (user === false){
      res.status(500).json({ msg: 'Incorrect password'})
    }
    if (user === null){
      res.status(500).json({ msg: 'Invalid email, please type again or Register'})
    }       

  } catch (error) {
    res.status(400).json({error })
  }
}

const getUser = async (req, res)=>{
  const {id} = req.params
  try {
    const user = await User.findById(id)
    res.status(200).json(user)

  } catch (error) {
    res.status(400).json({error })    
  }
}


const logOut = (req, res) => {
  console.log('logout user');
}

const showData = (req, res) => {
  console.log(req.headers);
  res.status(200).json({ message: 'private data' })
}


const updateUser = async (req, res) => {
  const id = req.params.id
  let { name, lastname, email, profilePicture} = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, lastname, email, profilePicture})    
    res.status(201).json(user);    
  } catch (error) {
    res.status(400).json({error })
  }
} 


module.exports = {
  createUser,
  loginUser,
  logOut,
  showData,
  getUser,
  updateUser
}