const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validate-fields')
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/auth.controller')
const { validarToken } = require('../middlewares/validate-token')

const authRoute = Router()

authRoute.post(
  '/auth/new',
  [
    // middlewares
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must be 8 characters').isLength({
      min: 8,
    }),
    validateFields,
  ],
  createUser
)

authRoute.post(
  '/auth',
  [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must be 8 characters').isLength({
      min: 8,
    }),
    validateFields,
  ],
  loginUser
)

authRoute.get('/auth/renew', validarToken, revalidateToken)

module.exports = authRoute