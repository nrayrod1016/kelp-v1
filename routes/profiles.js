import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"


export { 
    router 
}

const router = Router() 

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit) 


function isLoggedIn(req, res, next) { 
    if (req, res, next) return next()
    redirect("/auth/google")
}