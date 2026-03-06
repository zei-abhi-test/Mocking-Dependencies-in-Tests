jest.mock('../models/user.model', () => ({
  create: jest.fn()
}))

const User = require('../models/user.model')
const { createUser } = require('../services/user.service')

describe('createUser Service', () => {

  it('should create a user and return the created user', async () => {

    const mockUserData = {
      name: "John Doe",
      email: "john@test.com"
    }

    const mockCreatedUser = {
      _id: "123abc",
      name: "John Doe",
      email: "john@test.com"
    }

    User.create.mockResolvedValue(mockCreatedUser)

    const result = await createUser(mockUserData)

    expect(User.create).toHaveBeenCalledWith(mockUserData)

    expect(result).toEqual(mockCreatedUser)

  })

})