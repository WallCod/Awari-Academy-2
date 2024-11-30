const fs = require('fs');
fs.readFile('dados.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
console.log("2. Obrigado, até breve!");

/*Assíncrono (Async)
O código assíncrono permite que múltiplas operações sejam iniciadas, 
e enquanto uma está sendo processada, outras podem ser iniciadas ou continuadas.
Isso é especialmente útil para operações que podem demorar,
como acessos a arquivos ou requisições de rede. */