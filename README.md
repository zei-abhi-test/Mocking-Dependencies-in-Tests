# Mocking-Dependencies-in-Tests
The Mongoose User model was mocked using jest.mock() and its create method was replaced with jest.fn().

Mocks allow the test to run without connecting to a real MongoDB database, making the test faster and deterministic.

The test verifies that the createUser service calls User.create() with the correct data.

It also confirms that the service returns the same mocked user object.

This ensures the service logic works independently of the database.