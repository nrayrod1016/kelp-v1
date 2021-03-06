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



router.post('/', restaurantsCtrl.create)

// DELETE /restaurants/:id
// router.delete('/:id', restaurantsCtrl.delRestaurant)


// show '/:id'
router.get('/:id', restaurantsCtrl.show)