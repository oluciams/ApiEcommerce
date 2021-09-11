const router = require('express').Router();
const validation = require('../middlewares/validationMiddleware')
const userSchema = require('../validations/user.validation')

const { loginUser, createUser, showData, getUser, updateUser, deleteUser} = require('../controllers/auth.controllers');
const authTokenValidator = require('../middlewares/authTokenValidator');

// signup
router.post('/signup', validation(userSchema), createUser);

//login
router.post('/login', loginUser);

router.get('/user/:id', getUser);

// Update Profile
router.put('/user/:id', authTokenValidator, updateUser);

router.delete('/user/:id', deleteUser)

// jwt testing validation
router.get('/', authTokenValidator, showData);

module.exports = router;