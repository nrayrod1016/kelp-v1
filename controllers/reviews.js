import { render } from 'ejs'
import { Restaurant } from '../models/restaurant.js'
import { Review } from '../models/review.js'

export { 
    index,
    create,
    showReview as show,
    deleteReview as delete, 
    updateReview as update
}

function updateReview(req, res) { 
  console.log('emma')
       Restaurant.findById(req.params.id)
       .then(restaurant => { 

         Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
         .then(review => { 
           res.redirect('/restaurants')
        })
     })
      
 }
 
function deleteReview(req, res){ 
  console.log('emma')
  Review.findByIdAndDelete(req.params.id)
  .then(review => {
   
      res.redirect('/restaurants')

   
    // find the restaurant
    // remove the review from the restuarants reviews array 
  })
}
// function new(req, res) { 
  function index(req, res) { 
    Review.find({})
    .then(review => { 
      render('restaurants/show', { 
        title: Restaurants,
        review: reviews
      })
    })

  }
 


// }
function create(req, res) {
    // Add author/resinfo to req.body (for when we use model.create)
    req.body.author = req.user.profile._id
    req.body.restaurant = req.params.id
    // Create the review
    Review.create(req.body)
    .then(review => {
      // Add the review reference to the restaurant
      Restaurant.findById(req.params.id)
      .then(restaurant=> {
        restaurant.reviews.push(review._id)
        restaurant.save()
        .then(() => {
          res.redirect(`/profiles`)
        })
      })
    })
  }
// add review function 
  function showReview(req, res) { 
     Review.findById(req.params.id)
     .populate('author')
     .populate({
       path: 'reviews',
       populate: { 
         path: 'author'
       }
      })
     .then(review => { 
       console.log("this is the reviews", review)
       res.render('restaurants/show', { 
         title: 'Reviews',
         review
       })
    })
  }



