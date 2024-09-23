// Import dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
app.use(express.json()); // To parse JSON request body

// Connect to MongoDB (you can replace the connection string with your own)
mongoose.connect('mongodb://mongo:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Product model
const Product = require('./models/product');

// Route: Get all products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Route: Add a new product
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// Set the app to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
