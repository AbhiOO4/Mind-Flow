
import express from 'express'
import { login, signup } from '../controllers/auth.js'
import { signUpValidation, loginValidation } from '../middleware/authValidation.js'

const router  = express.Router()

router.post('/login', loginValidation, login)  

router.post('/signup', signUpValidation, signup)


export default router