import { Router } from 'express'
export {
    router
}

const router = Router()

router.get('/', isLoggedIn, usersCtrl.edit) 

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}