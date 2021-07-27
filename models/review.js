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
    content: { 
        type: String,
        required: true 
    } , 
    rating: {
        type: Number,
        required: true 
    }, 
    
  menuItems: String, 
  itemRating: Number, 
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)


