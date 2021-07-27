import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

export {
  router
}

const router = Router()

// GET /students
router.get('/', restaurantsCtrl.index)

// router.get('/search', restaurantsCtrl.search)


// POST /restaurants

router.post('/restaurants', restaurantsCtrl.addRestaurant)



// DELETE /restaurants/:id
router.delete('/restaurants/:id', restaurantsCtrl.delRestaurant)

