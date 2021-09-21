const jwt = require('jsonwebtoken');


const authTokenValidator = (req, res, next) => {
const authHeader = req.headers['authorization'];
//console.log('este es el token', authHeader)

  if (!authHeader) {
    //console.log('desde diferente', authHeader)

    next({ statusCode: 401, message: 'unauthorized' })
  }

  if (authHeader === null) {
    //console.log('desde null', authHeader)
    next({ statusCode: 401, message: 'unauthorized' })
  }

  jwt.verify(authHeader, process.env.SECRET, async (err, user) => {
   
    if (err) { 
      //console.log('desde jwt error', authHeader)        
      next({ statusCode: 403, message: 'forbidden' });
    }
    else {   
     // console.log('desde jwt else', authHeader)         
      next();
    }
  })
}

module.exports = authTokenValidator;