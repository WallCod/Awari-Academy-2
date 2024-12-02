const request = require('sync-request');

function fetchDataSync() {
    const res = request('GET', 'https://jsonplaceholder.typicode.com/users/1');
    const data = JSON.parse(res.getBody('utf8'));
    console.log('data');
}

console.log('Início da requisição sícrona');
fetchDataSync();
console.log('Fim da requisição síncrona');

/* Exemplo síncrono, chamando um serviço externo . 
   Usando a API pública JSON Placeholder, para obter dados de usúario e ,
   instalando a biblioteca sync-request, para simular uma chamada síncrona.

   O código espera a resposta da requisição para continuar. 
   Note que Início da requisição síncrona e Fim da requisição síncrona são
   exibidos sequencialmente antes e depois dos dados do usuário.

*/