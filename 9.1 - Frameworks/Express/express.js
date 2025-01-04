
const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('<h1>Início</h1><p>Bem Vindo. Você está na página inicial.</p>') ;
});

app.get('/produtos', (req, res) => {
    res.send('<h1>Produtos</h1><p>Você está na página produtos.</p>');
});

app.get('/contatos', (req, res) => {
    res.send('<h1>Contatos</h1><p>Você está na página de contatos</p>');
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});