import { Router } from 'express'
import * as profileCtrl from "../controllers/profiles.js"


export { 
    router 
}

const router = Router() 

router.get('/', isLoggedIn, profiles.Ctril.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit) 
