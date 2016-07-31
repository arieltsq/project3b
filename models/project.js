const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  github_link: { type: String },
  html_link: { type: String },
  img_src: { type: String }
})

module.exports = mongoose.model('Project', ProjectSchema)
