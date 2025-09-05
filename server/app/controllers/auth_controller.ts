import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ request, auth, response }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.findBy('email', email)

    if (!user || user.password != password) {
      return response.unauthorized({ message: 'Invalid email or password' })
    }

    const token = await auth.use('api').createToken(user, ['*'])

    return response.ok({
      message: 'Logged In successfully',
      token,
      user,
    })
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'Logged out successfully' })
  }
}
