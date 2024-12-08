const http = require('http');

// Opções de requisição HTTP
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET'
};

// Fazendo a requisição HTTP
const req = http.request(options, (res) => {
    let data = '';

// Coletando dados ao recebê-los
res.on('data', (chunk) => {
    data += chunk;
});

// Finalizando ao término da resposta
res.on ('end', () => {
    console.log(`Resposta do Servidor: ${data}`);
 });
});

// Tratamento de erros
req.on ('error', (e) => {
    console.log(`Erro na requisição: ${e.message}`);
});

// Finalizando a requisição
req.end();
