const express = require('express');
const router = express.Router();

//Dados de exemplo (simulação de um banco de dados)
let users = [
    { id: 1, name: 'Wallax Figueiredo', email: 'blackwoodspell@gmail.com'},
    { id: 2, name: 'Tatiana Fiel', email: 'louritalinda@gmail.com'}
];

//Criar um novo Usuário
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

//Listar todos os Usuários
router.get('/', (req, res) => {
    res.json(users);
});

//Obter um usuário específico
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

//Atualizar um usuário 
router.put('/:id', (req, res) => {
    const user =  users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message: 'User not found'});

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
});

//Excluir um usuário
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
