const jwt = require('jsonwebtoken');
const User = require('../models/user.model')


const authTokenValidator = (req, res, next) => {
const authHeader = req.headers['authorization'];


  if (!authHeader) {
    next({ statusCode: 401, message: 'unauthorized' })
  }

  if (authHeader === null) {
    next({ statusCode: 401, message: 'unauthorized' })
  }

  jwt.verify(authHeader, process.env.SECRET, async (err, user) => {
    if (err) {
      next({ statusCode: 403, message: 'forbidden' });
    }
    else {      
      req.user = user.id;
      const dataUser = await User.findById(user.id)
      res.locals.user = dataUser       
      next();
    }
  })
}

module.exports = authTokenValidator;