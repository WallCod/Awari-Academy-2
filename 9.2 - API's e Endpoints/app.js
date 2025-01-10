const express = require('express');
const app = express ();
const usersRouter = require('./routes/users.js');
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

//Rotas de Usuários
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});