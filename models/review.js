import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  review
}



const reviewSchema = new Schema({
  title: { 
   type: String,
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
    required: true
  }
},{
  timestamps: true,
})




const GameReview = mongoose.model("GameReview", gameReviewSchema)