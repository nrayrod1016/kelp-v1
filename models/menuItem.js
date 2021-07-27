import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  menuItem
}

const profileSchema = new Schema({
  title: {
      type: String,
      required: true 
  }, 
  content: { 
      type: String,
      required: true 
  },   
  imageURL: String,
  madeBy: [{type: Schema.Types.ObjectId, ref: "Restaurants"}],
  reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]

}, {
  timestamps: true
})

const menuItem = mongoose.model('menuItem', menuItemSchema)
