const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')
const projectsController = require('../controllers/projects_controller')
const skillsController = require('../controllers/skills_controller')
const worksController = require('../controllers/works_controller')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Profile Routes inline
router.get('/', (req, res) => {
  // we only have a single profile in the db, so the first one is fine
  Profile.findOne({}, (err, profile) => {
    if (err) return res.status(404).json({message: 'Profile not found'})
    res.json(profile)
  })
})

// Keep project routes in a seperate controller file
router.get('/projects', projectsController.index)
router.get('/projects/:id', projectsController.show)

router.get('/skills', skillsController.index)
router.get('/skills/:id', skillsController.show)

router.get('/works', worksController.index)
router.get('/works/:id', worksController.show)

// export the router so the main app can access it
module.exports = router
