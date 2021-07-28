import { Restaurant } from '../models/restaurant.js'
import { Review } from '../models/review.js'

export { 

    create
}

function create(req, res) {
    // Add author/game info to req.body (for when we use model.create)
    req.body.author = req.user.profile._id
    req.body.game = req.params.id
    // Create the review
    review.create(req.body)
    .then(review => {
      // Add the review reference to the Game
      review.findById(req.params.id)
      .then(game => {
        Review.reviews.push(review._id)
        review.save()
        .then(() => {
          res.redirect(`/profiles}`)
        })
      })
    })
  }