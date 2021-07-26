import { Restaurant } from '../models/restaurant.js'
import { Review } from '../models/review.js'


export {
create 
}


// create the reviw and the the review to the res

function create(req, res) { 
    req.body.author = req.user.profile._id
    req.body.restaurant = req.params.id 
    Review.create(req.body)
    .then(review => { 
        Restaurant.findById(req.params.id)
        .then(game => { 
            restaurant.reviews.push(review._id)
            restaurant.save()
            .then(() => { 
                res.redirect(`/restaurants}`)
            })
        })

    })
}