import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"


export { 
    router 
}


const router = Router() 

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit) 
router.put('/:id', isLoggedIn, profilesCtrl.update)
router.get('/:id/friend', isLoggedIn, profilesCtrl.addFriend)
// router.get('/:id/unfriend', isLoggedIn, profilesCtrl.removeFriend)

function isLoggedIn(req, res, next) { 
    if (req, res, next) return next()
    redirect("/auth/google")
}