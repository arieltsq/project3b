const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  picture: {type: String},
  tagline: {type: String},
  github_profile: {type: String},
  email: {type: String},
  linkedIn: {type: String}
})

ProfileSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    return {
      _id: ret._id,
      name: `${ret.first_name} ${ret.last_name}`,
      picture: ret.picture,
      tagline: ret.tagline,
      github: ret.github_profile,
      email: ret.email,
      linkedIN: ret.linkedIn
    }
  }
})

module.exports = mongoose.model('Profile', ProfileSchema)
