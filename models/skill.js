const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number },
  category: { type: String }
})

module.exports = mongoose.model('Skill', SkillSchema)
