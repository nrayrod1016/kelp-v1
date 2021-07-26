import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import session from 'express-session'
// import cookieParser from 'cookie-parser'
import logger from 'morgan'
import methodOverride from 'method-override'
import passport from 'passport'
import { passUserToView } from './middleware/middleware.js'

// require routes 
// import {router as indexRouter } from './routes/index.js'
import { router as indexRouter } from './routes/index.js'
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'

// creates the express app 
const app = express()


// MongoDB connect 
import('./config/database.js')

// load passport 
import('./config/passport.js')




// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')


//  input middleware 
app.get(methodOverride('_.method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
// app.use(cookieParser())
//  session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: { 
      sameSite: 'lax', 
    }
  })
)
// passport (middleware = M.) router
app.use(passport.initialize())
app.use(passport.session())

//  custom middleware
app.use(passUserToView)


// mount (M.) routers here "app.use("/routerName", nameRouter) = syntax"
app.use('/', indexRouter)
app.use('/profiles', profilesRouter)
app.use('/auth', authRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
