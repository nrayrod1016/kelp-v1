
import { Profile } from '../models/profile.js'
import { Restaurant } from '../models/restaurant.js'

export {
  index,
  newRestaurant,
  addRestaurant as create,
  // delRestaurant,
  restaurantProfile as show
  // search
}



function index(req, res, next) {
    Restaurant.find({})
    .then(restaurants => {
      console.log(restaurants)
        // Passing restaurants and name, for use in the EJS
        res.render("restaurants/index", { 
          title: 'Kelp',
          restaurants: restaurants, 
        
        
        })
      })
    
}


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


function addRestaurant(req, res) {
  console.log(req.user)
  // req.body.profile = req.user.profile._id
  
    Restaurant.create(req.body)
    .then(restaurant => {
      Profile.findById(req.user.profile._id)
      .then(profile => {
        profile.savedRestaurants.push(restaurant._id)
        profile.save()
        res.render("restaurants/new", { 
          title: 'Restaurants',
          restaurant: restaurant
        })
      })
    })
        .catch(err => { 
          console.log(err)
          res.redirect('/restaurants')
      })
  }


   function newRestaurant(req, res) {
    res.render('restaurants/new', { 
      title: 'Restaurants',
      imageURL: 'avatar',
     
      
    })
    //   console.log('emma')
    //   console.log(req.body)
     }




// function delRestaurant(req, res, next) {
//   // Find Restaurant
//   Restaurant.findById(req.user.profile._id)
//   .then(restaurant => {
//     restaurant.remove({_id: req.params.id})// Remove res using remove()
//     restaurant.save()
//     .then(()=> {
//       res.redirect('/restaurants')// Redirect back to /restaurants
//     })
//   })
// }

function restaurantProfile(req, res) { 
  //  find individual restaurant profile r
  Restaurant.findById(req.params.id) 
  .populate('reviews')
  // .then pass restaurant 
  .then(restaurant => {
    console.log('this is the restaurant', restaurant)
    res.render('restaurants/show', {
      title: `${restaurant.name} page`,
      restaurant, 

  })
  })
  // restaurant.
}
