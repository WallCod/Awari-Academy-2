import mysql.connector

# Config de conexão
config = {
    'user': 'root',
    'password': 'root',
    'host': '127.0.0.1',              # ou o endereço IP do servidor MySQL
    'database': 'estudos',
    'raise_on_warnings': True
}

# Estabelecendo a conexão
try:
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    print("Conexão bem-sucedida!")

# Realizando uma consulta de exemplo
    cursor.execute("SELECT * FROM aulas")
    for row in cursor.fetchall():
        print(row)

# Fechando a conexão
    cursor.close()
    conn.close()
    print("Conexão encerrada!")

except mysql.connector.Error as err:
    print(f"Erro: {err}")