const { response } = require('express')
const bcrypt = require('bcryptjs')
const { User } = require('../models/users.model')
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req, res = response) => {

  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'User already exists',
      })
    }

    user = new User(req.body)

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    const token = await generateJWT(user.id, user.email)

    res.status(201).json({
      ok: true,
      uid: user.id,
      email: user.email,
      role: user.role,
      token,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    })
  }
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    console.log(user);

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Wrong user or password',
      })
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Wrong user or password',
      })
    }

    // Generar JWT
    const token = await generateJWT(user.id, user.name)

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      role: user.role,
      token,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    })
  }
}

const revalidateToken = async (req, res = response) => {
  const { uid, name } = req

  // Generar JWT
  const token = await generateJWT(uid, name)

  res.json({
    ok: true,
    token,
  })
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
}