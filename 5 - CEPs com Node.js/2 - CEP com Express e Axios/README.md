## CEP com Express e Axios

---

### Explicando todo o código.

1 - **Carregando variáveis de ambiente.**
  - require('dotenv').config();
  - __Função:__ Carrega variáveis de ambiente de um arquivo .env para process.env.
  - **Uso:** </strong>Permite definir configurações sensíveis como a porta do servidor em um arquivo **.env.**

2 - **Importando módulos necessários**

  - const express = require('express');
  - const axios = require('axios'); 

  - __express:__ Um framework web minimalista para Node.jspara criar servidores HTTP e gerenciar rotas.

  - __axios:__ Uma biblioteca para fazer requisições HTTP, simplificando chamadas e manipulação de respostas.  

3 - **Inicializando a aplicação Express**

  - const app = express();

  - **app:** Instância da aplicação Express, usada para configurar rotas e middleware.

4 - **Definindo a porta do Servidor**

  - const PORT = process.env.PORT || 3000;

  - **PORT:** Define a porta do servidor. Usa a variável de ambiente PORT ou 3000 como 
  padrão.

5 - **Configurando Middleware**

  - app.use(express.json());

  - **express.json():** Middleware que analisa requisições com payload JSON e popula req.body.

6 - **Definindo a rota de consulta de CEP**

  - app.get('/cep/:cep', async (req, res) => {
    const { cep } = req.params;
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        if (data.erro) {
            return res.status(404).json({ error: 'CEP não encontrado' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar o CEP' });
    }
});

  - **app.get('/cep/:cep', ...):** Define uma rota GET para '/cep/:cep'.

  - **:cep:** Parâmetro dinâmico na URL para o CEP.

  - **async (req, res):** Função assíncrona que lida com a requisição e resposta.

  - **req.params:** Acessa os parâmetros da URL. Aqui, pegamos o CEP da URL.

  - **try/catch:** Bloco para capturar erros na requisição HTTP.

  - **axios.get():** Faz uma requisição GET para a API ViaCEP usando o CEP fornecido.

  - **response.data:** Dados retornados pela API.

  - **if (data.erro):** Verifica se a API retornou um erro (CEP não encontrado).

  - **res.json(data):** Retorna os dados do CEP em formato JSON.

  - **res.status(404).json({ error: 'CEP não encontrado' }):** Retorna um erro 404 se o CEP não for encontrado.

  - **res.status(500).json({ error: 'Erro ao consultar o CEP' }):** Retorna um erro 500 se houver um problema na consulta.

7 - **Iniciando o Servidor**

  - app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

  - **app.listen(PORT, ...):** Inicia o servidor Express na porta definida.

  - **console.log():** Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.

  ---

  ### Resumo

  Este código cria um servidor HTTP usando Express que responde a requisições GET para a rota /cep/:cep. Quando um CEP é fornecido, o servidor faz uma requisição à API ViaCEP para obter informações do CEP e retorna esses dados ao cliente em formato JSON. Se houver um erro ou o CEP não for encontrado, o servidor retorna uma mensagem de erro apropriada.

  ---

##### Att.
- 🦁
- [Wallax Figueiredo](https://www.linkedin.com/in/wallax-figueiredo-41116b285/)

