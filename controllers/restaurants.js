import { response } from 'express'
import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  index,
  // search,
  // create,
  newRestaurant,
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
        title: 'Kelp',
        restaurants: restaurants, 
        name: req.query.name,
        user: req.user
      })
    })
}

// function create(req, res, next) { 
//     const restaurant = new restaurant(req.body)
//     restaurant.save(function (err) {
//       if (err) return res.redirect('/restaurants/new')
//       res.render('/restaurants')
//     })
//     res.render("restaurants/new", { 
//       title: 'Create Restaurant',
//       restaurants: restaurants, 
//       name: req.query.name,
//       user: req.user
//     })
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
    Restaurant.create(req.body)
    .then(restaurant => {
      res.render("restaurants/new", { 
        title: 'Restaurants',
        restaurant: restaurant, 
        name: req.query.name,
        user: req.user
     })


    })
  }
    // res.render('restaurants/new')


   function newRestaurant(req, res) {
    res.render('restaurants/new', { 
      title: 'Restaurants',
      imageURL: 'avatar',
     
      
    })
    //   console.log('emma')
    //   console.log(req.body)
      //find all one restaraunt or many?
      // Restaurant.find({})
      // .then(restaurant => { 
      //   console.log(Profile)
      //   Profile.findById(req.params.id)
      //   .populate('savedRestaurants')
      //   .then((profile) => {
      //   profile.restaurants.push(profile.user.id)
      //   restaurant.save(function(err) {
      //     res.redirect('/restaurants')
      //   })
      //   })
      //     })
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
