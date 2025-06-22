const express = require('express');
const { v4: uuidv4 } = require('uuid');
const validateProduct = require('../middleware/validateProduct');
const router = express.Router();

let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET a specific product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).send(err);
  }
  res.send(product);
});


// Create a new product
router.post('/', validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };
  products.push(newProduct);
  res.send(newProduct);
});


// Update a product
router.put('/:id', validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).send({ error: 'Product not found' });
  }
 products[index] = { ...products[index], ...req.body };
  res.send(products[index]);
});


// DELETE a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).send({ error: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.send(deleted[0]);
});



module.exports = router;
