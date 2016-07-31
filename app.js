require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/routes')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

app.use(morgan('dev'))

app.use(router)

// save images in the public folder
app.use(express.static('public'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', router)

// CATCHING ERRORS

// ERRORS
// catch 404 and pass on to error handlers
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Handle Errors in development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// Handle errors in production with less information logged
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Fantastic Server is listening on port ${process.env.PORT}`)
})
