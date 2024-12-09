// Escrita em um arquivo

const fs = require('fs');

//caminho do arquivo onde queremos escrever
const filePath = 'saida.txt';

// Conteúdo que queremos escrever
const content = 'Este é um conteúdo de exemplo.';

// Escrevendo no arquivo
fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error(`Erro ao escrever no arquivo: ${err.message}`);
        return;
    }
    console.log('Arquivo escrito com sucesso!');
});