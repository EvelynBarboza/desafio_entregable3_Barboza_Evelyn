const express = require('express');
const router = express.Router();
const Product = require('..routes/Productos');

// Ruta para obtener productos con límite
router.get('/', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const products = await Product.find().limit(limit);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;