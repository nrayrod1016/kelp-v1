import mongoose from 'mongoose'
const Schema = mongoose.Schema
export {
  Profile
}

const profileSchema = new Schema({
  name: String,
  avatar: String,
  bio: String,
  friends: [{type: Schema.Types.ObjectId, ref: "Profile"}], 
  savedRestaurants: [{type: Schema.Types.ObjectId, ref: "Restaurants"}],
  favoriteItems: [{type: Schema.Types.ObjectId, ref: "Menu Items"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

