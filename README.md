
# 🛒 Product API - Express.js (In-Memory)

This is a simple Product RESTful API built using **Express.js** with in-memory data storage. It supports CRUD operations, filtering, search, pagination, and basic statistics.

---

## 📦 Project Structure

```
Server/
├── routes/
│   └── productRoutes.js
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   ├── validateProduct.js
│   └── errorHandler.js
├── server.js
├── .env.example
├── README.md
└── package.json
```

---

## 🚀 How to Run the Server

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Lutty112.git
cd week-2-express-js-assignment-Lutty112
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file based on the `.env.example`:


Edit `.env` and add your API key:
```env
API_KEY=my_api_key_here
PORT=3000
```

### 4. Run the server

```bash
pnpm start 
```

Server will run on:  
**http://localhost:3000**

---

## 🔐 Authentication

All routes require an API key in the header:

```http
x-api-key: your_api_key_here
```

---

## 📡 API Endpoints

### All routes are prefixed with:

` /api/products`

**Headers:**
```
x-api-key: your_api_key_here
```
## Get All Products
  GET /api/products

**Success Response:**
```json
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]
```

## Get a Product by ID
  GET /api/products/:id 

Example:
GET /api/products/1

**Success Response:**
```json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}

## Create a Product
 POST /api/products

**Body:**
```json
{
  "name": "Tablet",
  "description": "10-inch screen tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}

**Success Response:**
```json
{
  "id": "generated-uuid",
  "name": "Tablet",
  "description": "10-inch screen tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}

✏️ Update a Product
 PUT /api/products/:id

Example:
PUT /api/products/2

**Body:**
```json
{
  "price": 750,
  "inStock": false
}
**Success Response:**
```json
{
  "id": "2",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 750,
  "category": "electronics",
  "inStock": false
}

❌ Delete a Product
 DELETE /api/products/:id

Example:
DELETE /api/products/3

**Success Response:**
```json
{
  "id": "3",
  "name": "Coffee Maker",
  "description": "Programmable coffee maker with timer",
  "price": 50,
  "category": "kitchen",
  "inStock": false
}

🧩 Middleware Used
logger – Logs incoming requests

auth – Simulates authentication

validateProduct – Validates product structure for POST and PUT

notFound – Handles unmatched routes

errorHandler – Global error handler

---

## 🧪 Test With Postman

1. Set `x-api-key` header.
2. Use the above endpoints and test them in Postman.
---

## 📬 Contact

For any issues or suggestions, please open an issue on GitHub or contact the developer.

---

