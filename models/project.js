const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  github: { type: String },
  html: { type: String },
  img: { type: String }
})

module.exports = mongoose.model('Project', ProjectSchema)
