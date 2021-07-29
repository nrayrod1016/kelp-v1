import { Restaurant } from '../models/restaurant.js'
import { Review } from '../models/review.js'

export { 

    create,
    addReview as show
}

// function new(req, res) { 
 


// }
function create(req, res) {
    // Add author/game info to req.body (for when we use model.create)
    req.body.author = req.user.profile._id
    req.body.restaurant = req.params.id
    // Create the review
    review.create(req.body)
    .then(review => {
      // Add the review reference to the restaurant
      Restaurant.findById(req.params.id)
      .then(restaurant=> {
        restaurant.reviews.push(review._id)
        restaurant.save()
        .then(() => {
          res.redirect(`/profiles}`)
        })
      })
    })
  }
// add review function 
  function addReview(req, res) { 
      


  }