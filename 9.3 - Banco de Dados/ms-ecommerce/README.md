# Microsserviços 🤖

---

Este projeto é um exemplo de um sistema de e-commerce baseado em microsserviços, implementado para gerenciar produtos e categorias de forma independente e escalável.

---

## Arquitetura

---

A arquitetura do projeto é baseada em microsserviços, onde cada serviço é responsável por uma parte específica do sistema. Os serviços se comunicam entre si através de APIs RESTful. Esta abordagem permite uma maior flexibilidade e escalabilidade, além de facilitar a manutenção e o desenvolvimento contínuo.

---

## Microsserviços

---

#### Serviço de Categorias
- **Descrição:** Este serviço gerencia as categorias dos produtos do e-commerce.
- **Responsabilidades:** 
  - Criar, atualizar e excluir categorias.
  - Listar todas as categorias disponíveis.
- **Endpoints:**
  - `GET /categorias` - Retorna todas as categorias.
  - `POST /categorias` - Cria uma nova categoria.
  - `PUT /categorias/{id}` - Atualiza uma categoria existente.
  - `DELETE /categorias/{id}` - Exclui uma categoria existente.

---

#### Serviço de Produtos


- **Descrição:** Este serviço gerencia os produtos do e-commerce.
- **Responsabilidades:**
  - Criar, atualizar e excluir produtos.
  - Listar todos os produtos disponíveis.
- **Endpoints:**
  - `GET /produtos` - Retorna todos os produtos.
  - `POST /produtos` - Cria um novo produto.
  - `PUT /produtos/{id}` - Atualiza um produto existente.
  - `DELETE /produtos/{id}` - Exclui um produto existente.



