const yup = require('yup')

const editUserSchema= yup.object ({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email('plaese type a correct email!').required(),
    profilePicture: yup.string().required()    
})

module.exports = editUserSchema