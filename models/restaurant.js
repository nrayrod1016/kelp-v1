import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
Restaurant
}

// const contentSchema = new mongoose.Schema({
//   content: String,
// })[contentSchema]




const restaurantSchema = new mongoose.Schema({
  title: String, 
  imageURL: String, 
  content: String, 
  reviews: [{type: Schema.Types.ObjectId, ref: "Review"}],
  // menuItems: [{type: Schema.Types.ObjectId, ref: "Menu Items"}] 

}, {
  timestamps: true
})





const Restaurant = mongoose.model('Restaurant', restaurantSchema)