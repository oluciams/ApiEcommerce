const router = require('express').Router();

const authTokenValidator = require('../middlewares/authTokenValidator');
const validation = require('../middlewares/validationMiddleware')
const userSchema = require('../validations/user.validation')
const loginSchema = require('../validations/login.validation')

const { loginUser, createUser, showData, getUser, updateUser, deleteUser} = require('../controllers/auth.controllers');


router.post('/signup', validation(userSchema), createUser);

router.post('/login', validation(loginSchema), loginUser);

router.get('/user/:id', getUser);

router.put('/user/:id', authTokenValidator, validation(userSchema), updateUser);

router.delete('/user/:id', authTokenValidator, deleteUser)



// jwt testing validation
router.get('/', authTokenValidator, showData);

module.exports = router;