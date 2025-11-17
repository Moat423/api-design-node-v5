import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'all habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'one habit' })
})

router.post('/', (req, res) => {
  res.json({ message: 'created habit' }).status(201)
})


router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habit' })
})

// make up new routes
router.post('/:id/complete', (req, res) => {
  res.json({ message: 'completed habit' })
})

router.get('/:id/stats', (req, res) => {
  res.json({ message: `Get stats for habit ${req.params.id}` })
})

export default router
