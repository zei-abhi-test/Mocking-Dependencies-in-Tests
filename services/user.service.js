const User = require('../models/user.model')

async function createUser(userData) {
  const user = await User.create(userData)
  return user
}

module.exports = { createUser }