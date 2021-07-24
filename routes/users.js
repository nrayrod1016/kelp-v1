import { Router } from 'express'
const router = Router()

router.get('/:id/edit', isLoggedIn, profilesCtrl.edit) 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

export {
  router
}
