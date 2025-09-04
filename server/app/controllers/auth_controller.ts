import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ request, auth, response }: HttpContext) {
    const email = request.input('email')
    const pasword = request.input('password')

    try {
      const user = await User.verifyCredentials(email, pasword)

      const token = await auth.use('api').createToken(user, ['*'], {
        expiresIn: '7d',
      })

      return response.ok({
        message: 'Logged in successfully',
        token,
        user,
      })
    } catch {
      return response.unauthorized({ message: 'Invalid email or password' })
    }
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'Logged out successfully' })
  }
}
