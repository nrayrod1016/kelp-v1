import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
Restaurant
}



// The factSchema is used to embedded docs in a student doc.
// There is no model and no 'facts' collection


const restaurantSchema = new mongoose.Schema({
  title: String, 
  imageURL: String, 
  content: String, 
  menuItems: [{type: Schema.Types.ObjectId, ref: "Menu Items"}], 
  reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]

}, {
  timestamps: true
})


const Restaurant = mongoose.model('Restaurant', restaurantSchema)