const express = require('express');
const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    res.status(200).send('Wallax Figueiredo');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});