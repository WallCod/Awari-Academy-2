// Objetos podem conter outros objetos.

let empresa = {
    nome: 'Tech Solutions',
    localizacao: {
        cidade: 'São Paulo',
        pais: 'Brasil'
    },
    funcionarios: ['Ana', 'Bruno', 'Carlos']
};
console.log(empresa.localizacao.cidade); // São Paulo