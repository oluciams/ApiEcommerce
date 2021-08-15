const router = require('express').Router();

const { loginUser, createUser, showData } = require('../controllers/auth.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

//login
router.post('/login', loginUser);

// signup

router.post('/signup', createUser);


// jwt testing validation
router.get('/', authTokenValidator, showData);

module.exports = router;