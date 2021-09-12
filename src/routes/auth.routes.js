const router = require('express').Router();

const authTokenValidator = require('../middlewares/authTokenValidator');
const validation = require('../middlewares/validationMiddleware')
const userSchema = require('../validations/user.validation')
const loginSchema = require('../validations/login.validation')
const editUserSchema = require('../validations/editUser.validation')

const { loginUser, createUser, getUser, updateUser, deleteUser, logOut} = require('../controllers/auth.controllers');


router.post('/signup', validation(userSchema), createUser);

router.post('/login', validation(loginSchema), loginUser);

router.get('/user/:id', authTokenValidator, getUser);

router.put('/user/:id', authTokenValidator, validation(editUserSchema), updateUser);

router.delete('/user/:id', authTokenValidator, deleteUser)

router.get('/logout', logOut);




module.exports = router;