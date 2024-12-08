# Modúlo HTTP

Este diretório contém exemplos de como utilizar o módulo `http` do Node.js para criar servidores e clientes HTTP. O módulo `http` é um dos principais módulos embutidos no Node.js e permite a criação de aplicações web robustas e escaláveis

---

### Criando um servidor HTTP


 - **Exemplo 1 (ex.js)**

#### **Explicação**

**Importação do módulo http:**

const http = require('http');

Importamos o módulo http para criar um servidor HTTP.

**Criação do servidor HTTP:**

const server = http.createServer((req, res) => { ... });

Usamos http.createServer para criar um servidor que escuta requisições e envia respostas. A função de callback recebe dois argumentos: req (requisição) e res (resposta).

**Definição do status e cabeçalhos da resposta:**

res.statusCode = 200; define o código de status da resposta para 200 (OK).

res.setHeader('Content-Type', 'text/plain'); define o cabeçalho Content-Type como text/plain.

**Envio da resposta:**

res.end('Hello, World!\n'); envia o corpo da resposta e encerra a comunicação.

**Configuração da porta e início do servidor:**

const port = 3000; define a porta onde o servidor escutará.

server.listen(port, () => { ... }); inicia o servidor e imprime uma mensagem no console quando estiver rodando.

---

### Criando um cliente HTTP para fazer uma requisição GET

 - **Exemplo 2 (Ex1.js)**

#### Explicação:

**Importação do módulo http:**

const http = require('http');

Importamos o módulo http para fazer uma requisição HTTP.

**Configuração das opções da requisição:**

const options = { ... };

Definimos as opções da requisição, incluindo o hostname, port, path e method.

**Fazendo a requisição HTTP:**

const req = http.request(options, (res) => { ... });

Usamos http.request para criar uma requisição HTTP. A função de callback recebe um argumento res (resposta).

**Coletando e processando dados:**

res.on('data', (chunk) => { ... }); coleta os dados recebidos em partes (chunk).

res.on('end', () => { ... }); processa os dados quando a resposta termina.

**Tratamento de erro:**

req.on('error', (e) => { ... }); lida com erros durante a requisição.

**Finalização da requisição:**

req.end(); finaliza a requisição.