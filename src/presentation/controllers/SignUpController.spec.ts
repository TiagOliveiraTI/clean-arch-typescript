import { expect } from 'chai'
import { SignUpController } from './SignUpController'

describe('SignUp Controller', () => {
  it('should return 400 if no name is provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).to.equal(400)

    expect(httpResponse.body).to.be.a.instanceOf(Error)
    expect(httpResponse.body.message).to.equal('Missing param: name')
  })
})
