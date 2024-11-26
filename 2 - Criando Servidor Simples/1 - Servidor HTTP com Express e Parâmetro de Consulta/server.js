//Esse código cria um servidor web simples usando a biblioteca Express.

//Importa a biblioteca Express.
//Isso traz a biblioteca Express para seu projeto, permitindo que você use suas funcionalidades.
const express = require('express');

//Cria uma instância do Express, que você usará para configurar seu servidor.
const server = express();

//Define uma rota GET.
//Defini uma rota para responder ás requisições GET no caminho /awari.
//Quando alguém acessar essa rota, o servidor:

//Imprime os parâmetros da consulta (query parameters) no console com console.log(req.query).
//Envia a mensagem "Deu Certo" de volta ao cliente que fez a requisição com res.send('deu Certo').
server.get('/awari', (req, res) => {
    console.log(req.query);
    return res.send('Deu Certo');
});


//Inicia o Servidor.
//Isso diz ao servidor para escutar requisições na porta 3333.
//Quando o servidor está rodando, ele estará esperando por conexões na porta 3333.
server.listen(3333);


//Isso cria um servidor básico que responde "Deu Certo" quando você visita 'http://localhost:/awari e imprime quaisquer parâmetros de consulta enviados com a requisição.
