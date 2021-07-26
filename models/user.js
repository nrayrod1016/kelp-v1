import mongoose from 'mongoose'


export {
  User
}

const userSchema = new mongoose.Schema({
  email: String,
  googleId: String,
  avatar: String,
  profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
},
   {
  timestamps: true
})

const User = mongoose.model('User', userSchema)