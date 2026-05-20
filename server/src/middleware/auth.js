function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) return next()
  res.status(401).json({ error: 'No autenticado' })
}

function checkRole(role) {
  return (req, res, next) => {
    if (req.session && req.session.userRole === role) return next()
    res.status(403).json({ error: 'No autorizado' })
  }
}

module.exports = { isAuthenticated, checkRole }