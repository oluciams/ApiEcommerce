const yup = require('yup')

const productSchema= yup.object ({  
    title: yup.string().required(),
    description: yup.string().required(),
    value: yup.number().required().positive().integer(),
    image: yup.string().required(),
    category: yup.object(),
    quantity: yup.number().required().positive().integer(),    
    
})

module.exports = productSchema