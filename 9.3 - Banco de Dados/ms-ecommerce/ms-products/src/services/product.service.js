const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

exports.showProducts = function() {
    const products = [
    {
        name: 'iPhone 17',
        price: 9600,
        category: 'Smarthphones'
    },
    {
        name: 'Samsung S25',
        price: 4500,
        category: 'Smarthphones'
    },
    {
        name: 'Monitor',
        price: 3000,
        category: 'Monitores'
    }];
    return products;
};

exports.getCategories = async function () {
    try {
        const categories = await axios.get(`${BASE_URL}/categories`);
        return categories.data;
    } catch (error) {
        console.error(error.message);
        return;
    }
}