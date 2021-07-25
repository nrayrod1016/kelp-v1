import mongoose from 'mongoose'
const Schema = mongoose.Schema 

export { 
    Restaurant
}


const restaurantSchema = new.mongooseSchema (
    { 
        title: String, 
        imageURL: String, 
        content: String, 
        menuItems: [{type: Schema.Types.ObjectId, ref: "Menu Items"}], 
        reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]
})


const Restaurant = mongoose.model("restaraunt", restaurantSchema)