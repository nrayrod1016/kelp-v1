import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

export {
  router
}

const router = Router()

// GET /students
router.get('/', restaurantsCtrl.index)

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/restauarnts', restaurantsCtrl.addRestaurant)

// DELETE /facts/:id
router.delete('/restaurants/:id', restaurantsCtrl.delRestaurant)
