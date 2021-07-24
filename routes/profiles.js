import { Router } from 'express'


export { 
    router 
}

const router = Router() 

router.get('/:id', isLoggedIn, profilesCtrl.show)