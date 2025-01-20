const { Router } = require('express');
const categoryProduct = require('./services/product.service.js');
const router = Router();

router.get('/products', async (req, res) => {
    try {
      const categories = await categoryProduct.getCategories();
      const products = categoryProduct.showProducts();

        return res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error: 'Internal server error'});
    }
});

router.post('/', (req, res) => {
    try {
        return res.status(200).json(req.body);
    }catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal server error'});
    }
});

module.exports = router;