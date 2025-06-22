const express = require('express');
const productRoutes = require('./routes/productRoutes.js');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const { errorHandler, notFound } = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);
app.use(auth);

// Product Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Global error handler
app.use(errorHandler);
app.use(notFound);


// Fire up the server
app.listen(PORT, () => 
  {console.log(`Server running on http://localhost:${PORT}`);
});
