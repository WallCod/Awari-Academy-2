// Informações de um produto

const fs = require('fs');

const produto = {
    id: 1,
    nome: "Playstation 5",
    preco: 1000,
    em_estoque: true,
    cores_disponiveis: ["preto","cinza", "branco" ]
};

// Salvando o JSON em um arquivo
console.log('Iniciando a criação do arquivo JSON...')
fs.writeFileSync('produto.json', JSON.stringify(produto, null, 2));
console.log('Arquivo JSON criado: produto.json');

// Imprimindo o produto no console
console.log('Produto criado:', produto);

/* Este exemplo mostra um objeto JSON com informações sobre um produto, incluindo um indetificador,
nome, preço, disponibilidade em estoque e as cores disponíveis.*/