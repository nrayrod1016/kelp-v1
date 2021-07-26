import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Review
}



const reviewSchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  restaurant: { 
   type: Schema.Types.ObjectId,
   ref:"Restaurant",
   required: true
  }, 
  content: { 
    type: String,
    required: true
  }, 
  rating: {
    type: Number,
    required: true
  }, 
  menuItems: String, 
  itemsRating: {
    type: Number,
    min: 1, max: 5,
    required: true
  }
},{
  timestamps: true,
})




const Review = mongoose.model("Review", reviewSchema)