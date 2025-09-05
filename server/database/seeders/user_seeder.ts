import User from '#models/user'
// import hash from '@adonisjs/core/services/hash'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      fullName: 'Galiveeti SaiRoopa',
      phone: '9392550157',
      email: 'sairoopa@gmail.com',
      password: 'Admin@123',
      role: 'admin',
    })
  }
}
