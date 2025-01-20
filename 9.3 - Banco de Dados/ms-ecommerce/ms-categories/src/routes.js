const { Router } = require('express');
const categoryService = require('./services/category.services');

const router = Router();

router.get('/categories', (req, res) => {
    try {
        const categories= categoryService.showCategories();
        return res.status(200).json(categories);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal server error'});
    } 
});

router.post ('/', (req, res) => {
    try {
        return res.status(200).json(req.body);
    } catch (error) {
        console.error(error.message);
        return res.status(500).jsom({ error: 'Internal server error'});
    }
});



module.exports = router;