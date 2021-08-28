const mongoose = require('mongoose');
const bcrypt= require('bcrypt')

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now()
  },
  profilePicture: {
    type: String,
    require: true,
  }

});

UserSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

UserSchema.statics.authenticate = async ({email, password})=>{
  const user = await mongoose.model('User').findOne({email: email})
  if(user){
    return new Promise ((resolve, reject)=>{
      bcrypt.compare(password, user.password, (err, result)=>{
        if(err)
          reject(err)       
          resolve(result ===true ? user : false)                
      })
      
    })  
    return user 
  }

  return null
}

module.exports = mongoose.model('User', UserSchema);



