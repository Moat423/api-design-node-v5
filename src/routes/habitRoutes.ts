import { Router } from 'express'

const router = Router()

router.get('/'), (req, res) => {
	req.json({message: 'all habits'})
}

router.get('/:id'), (req, res) => {
	req.json({message: 'one habit'})
}

router.post('/'), (req, res) => {
	req.json({message: 'created habit'}).status(201)
}


router.delete('/:id'), (req, res) => {
	req.json({message: 'deleted habit'})
}

// make up new routes
router.post('/:id/complete'), (req, res) => {
	req.json({message: 'completed habit'})
}

routerget('/:id/stats', (req, res) => {
	res.json({message: `Get stats for habit ${req.params.id}`})
})

export default router
