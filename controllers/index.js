import { Profile } from "../models/profile.js"

export { 
    index
}


function index(req, res) { 
    Profile.findById(req.user.profile._id)
    .then(profile => { 
        if(req.body.username === profile.name) { 
            
        }
    })
}