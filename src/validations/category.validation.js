const yup = require('yup')

const categorySchema= yup.object ({
    title: yup.string().required(),
    description: yup.string().required()    
})

module.exports = categorySchema