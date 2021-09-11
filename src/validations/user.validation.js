const yup = require('yup')

const userSchema= yup.object ({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email('plaese type a correct email!').required(),
    profilePicture: yup.string(),      
    password: yup.string().min(6, 'At least 6 characters').max(10, 'Max 10 characters').required(),
    confirmationPassword: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords don't match!").required()
})

module.exports = userSchema