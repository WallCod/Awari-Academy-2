// Configuração de uma Aplicação

const fs = require('fs');

const aplicacao = {
    app: "WallBet",
    versao: 1.0,
    configuracoes: {
        tema: "escuro",
        notificacoes: true,
        idioma: "pt-BR"
    }
}

// Criando o aplicativo JSON
fs.writeFileSync('aplicacao.json', JSON.stringify(aplicacao, null, 2));
console.log('aplicação criada:, aplicacao.json');

// Imprimindo aplicação JSON no console
console.log('aplicação criada', aplicacao);