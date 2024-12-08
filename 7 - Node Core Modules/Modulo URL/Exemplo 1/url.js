const url = require('url');

const urlString = 'https://www.example.com:8080/path/name?query=string#fragment';

const parsedUrl = url.parse(urlString, true);

console.log(`Protocolo: ${parsedUrl.protocol}`);
console.log(`Host: ${parsedUrl.host}`);
console.log(`Porta: ${parsedUrl.port}`);
console.log(`Caminho: ${parsedUrl.pathname}`);
console.log(`Consulta: ${JSON.stringify(parsedUrl.query)}`);
console.log(`Fragmento: ${parsedUrl.hash}`);