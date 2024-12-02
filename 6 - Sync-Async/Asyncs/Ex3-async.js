const axios = require('axios');

async function fetchDataSync() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log(response.data);
    } catch (error) {
        console.error('erro ao  buscar dados', error);
    }
}

console.log('Início da requisição assíncrona');
fetchDataSync();
console.log('Fim da requisição assíncrona');


/* 
O código não espera a resposta da requisição para continuar. 
Início da requisição assíncrona e Fim da requisição assíncrona são exibidos imediatamente,
 enquanto a resposta do usuário é exibida depois.
*/