const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // using underscore, because it's storing in database as a file
  // PLEASE NOTE THAT IT'S CASE SENSITIVE
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
})
// fat arrow => function will cause an error here
userSchema.methods.sayHello = function () {
  console.log('Hello I am' + this.first_name)
}

// acts like before safe function
userSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})
const User = mongoose.model('User', userSchema)

module.exports = User
