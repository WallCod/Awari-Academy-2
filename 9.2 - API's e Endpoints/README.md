# Criando uma API RESTful básica usando express.

---

Essa API permite realizar operações **CRUD (Criar, Ler, Atualizar, Excluir)** em dados de usuários fictícios.

---

#### Arquivo raiz (app.js)

**Importa o Express:** Importa o framework Express.

**Inicia a Aplicação Express:** Cria uma instância do aplicativo Express.

**Configurações de Rota:** Importa um arquivo de rotas (users.js) para lidar com requisições relacionadas a usuários.

**Middleware de JSON:** Usa middleware para parsear (entender) JSON no corpo das requisições.

**Define a Rota de Usuários:** Direciona todas as requisições que começam com /users para o roteador de usuários.

**Inicia o Servidor:** Faz com que o servidor escute a porta especificada (3000 ou a definida em process.env.PORT).

---

#### Arquivo de Rotas para os usuários (./routes/user.js)

**Importa o Express e Cria o Roteador:** Cria um roteador para gerenciar rotas relacionadas a usuários.

**Dados de Exemplo:** Uma lista de usuários fictícios usada para operações CRUD.

**Rota POST /users:** Cria um novo usuário e adiciona à lista.

**Rota GET /users:** Retorna a lista de todos os usuários.

**Rota GET /users/:id:** Retorna um usuário específico com base no ID.

**Rota PUT /users/:id:** Atualiza as informações de um usuário específico com base no ID.

**Rota DELETE /users/:id:** Remove um usuário da lista com base no ID.

---

#### Resumo


**Criar:** Adiciona novos usuários à lista.

**Ler:** Retorna todos os usuários ou um usuário específico.

**Atualizar:** Modifica as informações de um usuário específico.

**Excluir:** Remove um usuário da lista.