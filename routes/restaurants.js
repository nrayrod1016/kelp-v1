import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

export {
  router
}

const router = Router()

// GET /students
router.get('/', restaurantsCtrl.index)



// POST /restaurants
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/restaurants', restaurantsCtrl.addRestaurant)



// DELETE /restaurants/:id
router.delete('/restaurants/:id', restaurantsCtrl.delRestaurant)

