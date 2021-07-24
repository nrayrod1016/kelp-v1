import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"


export { 
    router 
}

const router = Router() 

router.get('/', isLoggedIn, profiles.Ctrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit) 
