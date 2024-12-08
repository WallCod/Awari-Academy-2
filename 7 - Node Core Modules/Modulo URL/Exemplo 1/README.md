# Algoritmo para analisar uma URL e extrair suas partes

---

### Sobre

**Importação do módulo url:**

const url = require('url');

Estamos importando o módulo url, que fornece utilitários para a análise e manipulação de URLs.

**Definição da URL:**

const urlString = 'https://www.example.com:8080/path/name?query=string#fragment';

Definimos uma string que representa a URL que queremos analisar.

**Análise da URL:**

const parsedUrl = url.parse(urlString, true);

Usamos a função url.parse para analisar a URL. O segundo argumento (true) indica que queremos que a consulta (query) seja convertida em um objeto.

**Exibição dos componentes da URL:**

console.log(...)

Extraímos e exibimos várias partes da URL, como o protocolo, host, porta, caminho, consulta e fragmento.