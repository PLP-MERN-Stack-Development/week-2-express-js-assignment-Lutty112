module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== "0112") {
    return res.status(401).send({ error: 'Unauthorized: Invalid API Key' });
  }
  next();
};

