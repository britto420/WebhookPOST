function validateRequest(req, res, next) {
  const { body } = req;
  
  if (!body || !body.id || !body.type) {
    return res.status(400).json({
      error: 'Invalid webhook payload',
      message: 'Required fields missing: id and type are mandatory'
    });
  }

  if (!body.data || typeof body.data !== 'object') {
    return res.status(400).json({
      error: 'Invalid webhook payload',
      message: 'Missing or invalid data object'
    });
  }

  next();
}

module.exports = { validateRequest };