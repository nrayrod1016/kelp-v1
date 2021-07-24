import { Profile } from "..models/profile.js"


export { 
    index, 
    show 
}

function index(req, res) { 

}

function show(req, res) { 
    
    Profile.findById(req.params.id)
    .then((profile) => { 
        Profile.findById(req.user.profiel)
        .then(userProfile => { 
            res.render("profiles/show", { 
                title: `${profile.name}'s profile `, 
                profile, 
                userProfile,
            })
        })
    })
    .catch(err => { 
    console.log(err)
    res.redirect("/")
    })
}