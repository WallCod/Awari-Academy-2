const fs = require('fs');
const dados = fs.readFileSync('dados.txt', 'utf8');
console.log(dados);
console.log('2. Obrigado, até breve!');

/* Exemplo Sícrono (Sync)
 O código síncrono é executado linha por linha,
 onde cada operação espera a anterior terminar antes de continuar. */
