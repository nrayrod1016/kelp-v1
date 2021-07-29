import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'


export {
  router
}

const router = Router()
router.get('/:id', isLoggedIn, reviewsCtrl.show)
router.post('/:id', isLoggedIn, reviewsCtrl.create)
router.delete('/:id', reviewsCtrl.delete)
router.put('/:id', reviewsCtrl.update)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

