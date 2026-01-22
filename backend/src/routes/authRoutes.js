
import express from 'express'
import { login, signup } from '../controllers/auth.js'
import { signUpValidation, loginValidation } from '../middleware/authValidation.js'
import rateLimiter from '../middleware/rateLimiter.js'

const router  = express.Router()

router.use(rateLimiter)

router.post('/login', loginValidation, login)  

router.post('/signup', signUpValidation, signup)


export default router