## Conexão com o Banco de Dados MySQL 💻

Este projeto inclui uma aplicação Python que se conecta a um banco de dados MySQL para gerenciar dados de aulas. Abaixo estão os passos para estabelecer a conexão e executar operações no banco de dados.

### Pré-requisitos

- Python 3.x
- MySQL Server
- Biblioteca `mysql-connector-python`

### Instalação da Biblioteca MySQL Connector

Para instalar a biblioteca `mysql-connector-python`, execute o seguinte comando no terminal:

bash
``pip install mysql-connector-python``

---

### Configuração da Conexão

No arquivo conectar_mysql.py, configure as credenciais de acesso ao banco de dados:

````import mysql.connector

config = {
    'user': 'seu_usuario',
    'password': 'sua_senha',
    'host': '127.0.0.1',
    'database': 'nome_do_seu_banco_de_dados',
    'raise_on_warnings': True
}

try:
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    print("Conexão bem-sucedida!")

# Exemplo de consulta ao banco de dados

    cursor.execute("SELECT * FROM aulas")
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    conn.close()
    print("Conexão encerrada.")

except mysql.connector.Error as err:
    print(f"Erro: {err}")
````

---

### Executando o Script

Para executar o script e estabelecer a conexão com o banco de dados, utilize o seguinte comando no terminal:

**python conectar_mysql.py**

---

### Conclusão

Este projeto demonstra como conectar uma aplicação Python a um banco de dados MySQL, realizar consultas e manipular dados de forma eficiente.


