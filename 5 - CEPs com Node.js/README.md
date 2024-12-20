# Implementações para Consulta de CEPs 🔍

---

### Exercício - CEPs com Node.js 📚

Este diretório contém duas implementações diferentes para consultar informações de CEP usando APIs. Abaixo, detalhamos cada abordagem e as razões para escolher uma em detrimento da outra.

---

###  Consulta de CEP com https

Esta implementação utiliza o módulo https do Node.js, para fazer uma requisição direta à API de CEP. É uma abordagem simples e direta, ideal para scripts pequenos ou aplicações onde a simplicidade é prioritária.

#### Características

 **Simplicidade:** Não requer bibliotecas externas, além do módulo https.

**Ideal para Scripts Rápidos:** Útil para tarefas simples e onde a complexidade adicional não é necessária.

 **Direto ao Ponto:**  Faz a requisição e manipula a resposta em um único script.

---

### Consulta de CEP com Express e Axios

Esta implementação utiliza o framework Express para configurar um servidor HTTP e a biblioteca Axios para simplificar as requisições HTTP. É uma abordagem mais robusta e escalável, ideal para aplicações web mais complexas.

#### Características

 **Estrutura Modular:**  Utiliza rotas e middleware, facilitando a adição de novas funcionalidades.

 **Uso de Axios:** Simplifica as requisições HTTP e torna o código mais legível.

**Escalável e Mantível:** Ideal para projetos que precisam crescer e serem mantidos a longo prazo.

 **Boas Práticas:** Uso de variáveis de ambiente e tratamento adequado de erros.

---

### Conclusão

A Implementação com HTTPS, serve para ser usada em scripts simples e diretos, que são simples e rápidos.

A Implementação com Express e Axios, são para aplicações mais complexas, onde a escalabilidade, organização e manutenção são importantes. 

---

## Att.

- 🦁
- [Wallax Figueiredo](https://www.linkedin.com/in/wallax-figueiredo-41116b285/)