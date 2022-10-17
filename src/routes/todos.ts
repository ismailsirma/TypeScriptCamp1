import { Router } from 'express'

const router = Router()

// register routes
router.post('/')
router.get('/')
router.patch('/:id')
router.delete('/:id')

export default router