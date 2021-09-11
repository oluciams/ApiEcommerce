const yup = require('yup')

const productSchema= yup.object ({  
    title: yup.string().required(),
    description: yup.string().required(),
    value: yup.number().required().positive().integer(),
    image: yup.string().required(),
    categoryId: yup.string().required(),
    quantity: yup.number().required().positive().integer()    
    
})

module.exports = productSchema