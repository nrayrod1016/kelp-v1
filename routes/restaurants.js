import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'

export {
  router
}

const router = Router()

// GET /restaurants
router.get('/', restaurantsCtrl.index)

// router.get('/search', restaurantsCtrl.search)

router.get('/new', restaurantsCtrl.newRestaurant)

//  POST /restaurants/new
// router.post('/', restaurantsCtrl.create)

// POST /restaurants

router.post('/', restaurantsCtrl.create)

// DELETE /restaurants/:id
router.delete('/restaurants/:id', restaurantsCtrl.delRestaurant)


// show '/:id'
router.get('/:id', restaurantsCtrl.show)