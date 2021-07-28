import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'
const router = Router()

export {
  router
}


// router.get('/', isLoggedIn, indexCtrl.index)

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { title: 'KELP by kelp' })
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

