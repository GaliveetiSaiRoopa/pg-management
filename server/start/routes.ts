/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const AuthController = () => import('../app/controllers/auth_controller.js')

router.on('/').render('pages/home')

router.post('/login', [AuthController, 'login'])
router.delete('/logout', [AuthController, 'logout'])

router.get('users', async () => {
  return [{ id: 1, name: 'Sai' }]
})
