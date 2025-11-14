//router has same methods as app
import {Router} from 'express'

const router = Router()

router.post('/register'), (req, res) => {
	res.status(201).json{message: 'user should have signed up'}
}

router.post('/login'), (req, res) => {
	res.status(201).json{message: 'user should have loged in'}
}

export default router
