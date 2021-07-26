import { Restaurant } from '../models/restaurant.js'

export {
  index,
  addRestaurant,
  delRestaurant,
}

function index(req, res, next) {
  // Make the query object to use with Student.find based on
  // whether the user has submitted the search form or not
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
 Restaurant.find(modelQuery)
    .sort("name")
    .exec(function (err, restaurants) {
      if (err) return next(err)
      // Passing students and name, for use in the EJS
      res.render("restaurants/index", { 
        restaurants: restaurants, 
        name: req.query.name,
        user: req.user
      })
    })
}

function addRestaurant(req, res, next) {
  // Find the student
  Restaurant.findById(req.user.restaurantProfile._id, function(err, restaurant) {
    // Push fact (req.body) into student fact array
    restaurant.facts.push(req.body)
    // Save student
    restaurant.save(function(err) {
      // Redirect back to /students
      res.redirect('/restaurants')
    })

  })
}

function delRestaurant(req, res, next) {
  // Find Student
  Restaurant.findById(req.user.restaurantProfile._id)
  .then(student => {
    // Remove fact using remove()
    restaurant.facts.remove({_id: req.params.id})
    restaurant.save()
    .then(()=> {
      // Redirect back to /students
      res.redirect('/restaurants')
    })
  })
}
