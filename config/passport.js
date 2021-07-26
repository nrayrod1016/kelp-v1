import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { User } from '../models/user.js'
import { Restaurant } from '../models/restaurant.js'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }, function (err, user) {
        if (err) return done(err)
        if (user) {
          // Found the user in the database!!!!
          return done(null, user)
        } else {
          // we have a new restaurant via OAuth!
          const newRestaurant = new Restaurant({
            name: profile.displayName,
            avatar: profile.photos[0].value,
          })
          // Build the user from 
          const newUser = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            restaurantProfile: newRestaurant._id
          })
          newRestaurant.save(function (err) {
            if (err) return done(err)
          })
          newUser.save(function (err) {
            if (err) {
              // Something went wrong while making a user - delete the profile
              // we just created to prevent orphan profiles.
              Restaurant.findByIdAndDelete(newRestaurant._id)
              return done(err)
            }
            return done(null, newUser)
          })
        }
      })
    }
  )
)

passport.serializeUser(function(user, done,) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id)
  .populate('restaurantProfile', 'name avatar')
  .exec(function(err, user) {
    done(err, user)
  })
})