const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
};

const notFound = (req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
};

module.exports = { errorHandler, notFound };


