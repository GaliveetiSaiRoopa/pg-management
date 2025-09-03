import { schema, rules } from '@adonisjs/validator'
import { HttpContext } from '@adonisjs/core/http'

export default class UserValidator {
  constructor(protected ctx: HttpContext) {}

  public schema = schema.create({
    fullName: schema.string({}, [rules.minLength(3)]),
    phone: schema.string({}, [rules.regex(/^[0-9]{10}$/)]),
    email: schema.string({}, [rules.email()]),
    password: schema.string({}, [rules.minLength(6)]),
    role: schema.enum(['admin', 'owner', 'resident', 'staff'] as const),
  })

  public messages = {
    'fullName.required': 'Full Name is required',
    'phone.required': 'Phone Number is required',
    'email.unique': 'This email is already registered',
    'password.minLength': 'Password should be more than 6 characters',
    'role.enum': 'Role must be admin, owner, resident, staff',
  }
}
