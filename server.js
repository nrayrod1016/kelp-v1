import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import session from 'express-session'
import logger from 'morgan'
import methodOverride from 'method-override'
import passport from 'passport'
import { passUserToView } from './middleware/middleware.js'
import cors from 'cors'



// mount require routes
import { router as indexRouter } from './routes/index.js'
import { router as restaurantsRouter } from './routes/restaurants.js'
import { router as authRouter } from './routes/auth.js'
import { router as profilesRouter } from './routes/profiles.js'
import { router as reviewsRouter } from './routes/reviews.js'

// connect to the MongoDB with mongoose
import('./config/database.js')
// connect to the passport database 
import('./config/passport.js')

// create the Express app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

//  middleware session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax'
    }
  })
)

//  passport middleware
app.use(passport.initialize())
app.use(passport.session())


 app.use(passUserToView)


// mount all routes with appropriate base paths
app.use('/', indexRouter)
app.use('/restaurants', restaurantsRouter)
app.use('/auth', authRouter)
app.use('/profiles', profilesRouter)
app.use('/reviews', reviewsRouter) 



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
