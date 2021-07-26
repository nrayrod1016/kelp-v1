import mongoose from 'mongoose'

const schema = mongoose.Schema

export { 
    menuItem
}

const menuItemSchema = new Schema({
title: String,
content: String,
madeBy: [{type: Schema.Types.ObjectId, ref: "Restaurant"}],
reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]

})


const menuItemSchema = mongoose.model('menuItem', menuItem)