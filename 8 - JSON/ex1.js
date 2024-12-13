// Dados de um Usuário

const fs = require('fs');

const usuario = {
    nome: "Wallax Figueiredo",
    idade: 32,
    email: "wallaxrpg@live.com",
    endereco: {
        rua: "Santo Antonio",
        cidade: "Salvador",
        estado: "Bahia",
        cep: "45606-000",
    },
    telefone: ["(71)-99999-9999"]
}

// Salvando o JSON em um arquivo
fs.writeFileSync('usuario.json', JSON.stringify(usuario, null, 2));
console.log('Arquivo JSON criado: usuario.json');

// Imprimindo o usuario no terminal
console.log('usuario criado', usuario);


/*Aqui, temos um objeto JSON com informações sobre um usuário, incluindo nome,
 idade, e-mail, endereço (como um objeto aninhado) e uma lista de telefones. */