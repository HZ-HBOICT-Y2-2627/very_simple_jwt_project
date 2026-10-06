export function hzOnly(req, res, next) {
  if (!req.user || req.user.affiliation !== 'hz') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
}