const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const methodOverride = require('method-override')
const helmet = require('helmet')
const hpp = require('hpp')

const { nonRegisteredRouter } = require('./routes')

const app = express()

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Use morgan for http request debug (only show error)
app.use(logger('dev', {
  skip: (req, res) => res.statusCode < 400,
}))

app
  .use(compression())
  .use(methodOverride())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .set('trust proxy', 'loopback')
  .use(express.static(path.join(__dirname, 'public'), { maxAge: 120 }))

// Using helmet and HPP to secure Express and prevent HTTP parameter pollution.
app
  .use(helmet.frameguard())
  .use(helmet.xssFilter())
  .use(helmet.hidePoweredBy())
  .use(helmet.noSniff())
  .use(hpp())

app.use(nonRegisteredRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
