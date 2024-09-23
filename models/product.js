const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: String,
    inStock: { type: Boolean, default: true },
});

// Export the model
module.exports = mongoose.model('Product', productSchema);
