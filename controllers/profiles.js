import { Profile } from "../models/profile.js"


export { 
    index, 
    show,
    edit, 
    update 
}

function index(req, res) { 
        Profile.find({})
        .then(profiles => { 
            res.render('profiles/index', { 
                title: "Kelpfiles", 
                profiles,
            })
    })
}

function show(req, res) { 
    
        Profile.findById(req.params.id)
        .then((profile) => { 
            Profile.findById(req.user.profile)
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

function edit(req, res) { 
        Profile.findById(req.params.id)
        .then(profile => { 
            res.render('profiles/edit', { 
                profile 
            })
        })
        .catch(err => { 
            console.log(err)
            res.redirect('/')
        })
    }


    function update(req, res) { 
        Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((profile) => { 
            res.redirect(`/profiles/${profile._id}`)
        })
        .catch((err) => { 
            console.log(err)
            res.redirect('/')
        })
    }