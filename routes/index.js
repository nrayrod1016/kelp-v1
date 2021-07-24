import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'

export { 
  router
}


const router = Router()



router.get('/', isLoggedIn, indexCtrl.index)



function isLoggedIn(req, res, next) { 
  if (req.isAuthenticated()) return next()
  res.redirect("/auth/google")
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KELP' })
})

