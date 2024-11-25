## CEP com HTTPs

---

### Explicando todo o código.

1 - **Importando Módulos**

 - **const https = require('follow-redirects')https;**

  - **https:** Importa o módulo https do pacote follow-redirects, que lida com redirecionamentos HTTP/HTTPS.

2 - **Definindo URL Base**

 - *const BASE_URL = 'example.api.findcep.com'*;

 - **BASE_URL:** Define a URL base para a API que será consultada.

3 - **Configuração das Opções da Requisição**

 - **let options = {
    'method': 'GET',
    'hostname': BASE_URL,
    'patch': '/v1/cep/01234000.json',
};**

 - **method:** Método HTTP usado para a requisição, neste caso, GET.

 - **hostname:** Nome do host da API.

 - **path:** Caminho da API para obter informações do CEP 01234000

4 - **Criando a Requisição HTTPS**

 - **let req = https.request(options, function (res) {
    let chunks = [];**

 - **req:** Cria uma requisição HTTPS usando as opções definidas.

 - **res:** Função de callback que recebe o objeto res (resposta).

5 - **Recebendo Dados em Chunks**

 -     res.on("data", function (chunk) {
       chunks.push(chunk);
    });

 - **Evento data:** Cada vez que um pedaço de dados é recebido, ele é adicionado ao array chunks.

6 - **Combinando e Exibindo os Dados     Recebidos**

 -     **res.on("end", function () {
        let body = Buffer.concat(chunks);
        console.log(body.toString());
    });
**
 - **Evento end:** Quando todos os dados foram recebidos, eles são concatenados em um único buffer.

 - **Exibindo no Console:** Converte o buffer em string e exibe o resultado no console.

7 - **Finalizando Requisição**

 - **req.end();**

 - **req.end():** Encerra a requisição.

 ---

 ### Resumo

 Este código cria uma requisição HTTPS para uma API de CEP. Ele define as opções da requisição, realiza a requisição, coleta os dados em chunks, concatena os chunks, converte os dados em string e exibe a resposta no console.

 ---

 ##### Att.

 - 🦁
- [Wallax Figueiredo](https://www.linkedin.com/in/wallax-figueiredo-41116b285/)


