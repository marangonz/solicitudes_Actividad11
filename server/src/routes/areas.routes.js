const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')

const { isAuthenticated, checkRole } = require('../middleware/auth')

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getById);
router.post('/', isAuthenticated, checkRole('admin'), create);
router.put('/:id', isAuthenticated, checkRole('admin'), update);
router.delete('/:id', isAuthenticated, checkRole('admin'), remove);

module.exports = router
