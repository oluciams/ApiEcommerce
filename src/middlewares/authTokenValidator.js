const jwt = require('jsonwebtoken');


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
      
      next();
    }
  })
}

module.exports = authTokenValidator;