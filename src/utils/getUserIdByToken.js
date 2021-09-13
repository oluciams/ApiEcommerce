const jwt = require('jsonwebtoken');


const getUserIdByToken = (token) => {

  let userId 

  jwt.verify(token, process.env.SECRET, async (err, user) => {
    if (user) {
      userId = user.id;      
    }
    else {      
      userId = err
    }    
  })
  
  return userId
}


module.exports = getUserIdByToken;