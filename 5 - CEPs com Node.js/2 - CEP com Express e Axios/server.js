require('dotenv').config();  // require('').config();
const express = require('express');  // const    = require('');
const axios = require('axios');  
const app = express();  // const   = express();
const PORT = process.env.PORT || 3000; // const   = process.env.PORT || ;

app.use(express.json());  //Middleware

app.get('/cep/:cep', async (req, res) => {  // Definindo ROTA
    const { cep } = req.params;
    try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;
    if (data.erro) {
        return res.status(404).json({ error: 'CEP não encotrado' });
    }
    res.json(data);
} catch (error) {
    res.status(500).json({ error: 'Erro ao consultar o CEP'});
}
});

app.listen(PORT, () => { //Inicializando o Servidor
    console.log(`Servidor rodando na porta ${PORT}`);
});