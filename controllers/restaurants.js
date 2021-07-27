import { response } from 'express'
import { Restaurant } from '../models/restaurant.js'

export {
  index,
  // search,
  addRestaurant,
  delRestaurant
}

function index(req, res, next) {
  // Make the query object to use with Restaurant.find based on
  // whether the user has submitted the search form or not
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
 Restaurant.find(modelQuery)
    .sort("name")
    .exec(function (err, restaurants) {
      if (err) return next(err)
      // Passing restaurants and name, for use in the EJS
      res.render("restaurants/index", { 
        restaurants: restaurants, 
        name: req.query.name,
        user: req.user
      })
    })
}

// function search (req, res) { 
//       Restaurant.findById()

// }

// function search(req, res) { 
//       res.find((req.body.search) 
//       .then((restaurant) => { 
//         res.render('restaurants/show', {
//         })
//       })
//       )
//       .catch(err => { 
//         console.log(err)
//         res.redirect('/'), {
//           title: 'Search results',
//           results: response.data.results
//         }
//       })
// }


function addRestaurant(req, res, next) {
  Restaurant.findById(req.user.restaurantProfile._id, function(err, restaurant) { 
    restaurant.push(req.body)
    restaurant.save(function(err) {
      res.redirect('/restaurants')
    })
  }) 
  // // Find the rest
  // Restaurant.findById(req.user.restaurantProfile._id, function(err, restaurant) {   
  //   Restaurant._id.push(req.body)// Push fact (req.body) into rest fact array
  //   restaurant.save(function(err) {// Save restaurant
  //     res.render('/restaurants/new')// Redirect back to /restaurants/new
  //   })
  // })
}


function delRestaurant(req, res, next) {
  // Find Restaurant
  Restaurant.findById(req.user.restaurantProfile._id)
  .then(restaurant => {
    restaurant.remove({_id: req.params.id})// Remove res using remove()
    restaurant.save()
    .then(()=> {
      res.redirect('/restaurants')// Redirect back to /restaurants
    })
  })
}
