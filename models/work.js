const mongoose = require('mongoose')

const WorkSchema = mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String },
  start_monthyear: { type: String },
  end_monthyear: { type: String },
  img: { type: String }
})

module.exports = mongoose.model('Work', WorkSchema)
