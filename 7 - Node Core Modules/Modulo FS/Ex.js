// Leitura de um arquivo


const fs = require('fs');

// Caminho do arquivo que queremos ler
const filePath = 'exemplo.txt';

// Lendo o arquivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
        return;
    }
    console.log(`Conteúdo do arquivo:\n$[data]`);
});
