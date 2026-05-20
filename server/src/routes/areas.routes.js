const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')

const { isAuthenticated, checkRole } = require('../middleware/auth')
const { validate } = require('../middleware/validate')
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema')

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getById);
router.post('/', isAuthenticated, checkRole('admin'), validate(createAreaSchema), create);
router.put('/:id', isAuthenticated, checkRole('admin'), validate(updateAreaSchema), update);
router.delete('/:id', isAuthenticated, checkRole('admin'), remove);

module.exports = router
