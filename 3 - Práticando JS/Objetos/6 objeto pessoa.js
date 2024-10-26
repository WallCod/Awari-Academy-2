
let pessoa = {
    nome: ['Maria', 'Silva'],
    idade: 27,
    sexo: 'feminino',
    interesses: ['dança', 'seriados'],
    bio: function() {
        console.log(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ela gosta de ' + this.interesses.join(', ') + '.');
    },
    saudacao: function() {
        console.log('Oi. Eu sou ' + this.nome[0] + '.');
    }
};

// Estrutura do Objeto pessoa
// Propriedades:

// nome: Um array com dois elementos ('Maria' e 'Silva'), representando o primeiro e o último nome.
// idade: Um número (27), representando a idade.
// sexo: Uma string ('feminino'), representando o gênero.
// interesses: Um array com dois elementos ('dança' e 'seriados'), representando os interesses.
// Métodos:
// bio: Mostra um alerta com uma mensagem que inclui o nome, a idade e os interesses da pessoa.
// saudacao: Mostra um alerta com uma mensagem de saudação que inclui o primeiro nome da pessoa.

// Usando o Objeto pessoa
// Você pode chamar os métodos do objeto pessoa para ver as mensagens

pessoa.bio(); // Alerta: Maria Silva tem 27 anos de idade. Ela gosta de dançar, seriados.
pessoa.saudacao(); // Alerta: Oi. Eu sou Maria.

//Esse objeto pessoa é um ótimo exemplo de como agrupar dados e métodos relacionados em uma estrutura coerente.
// Podemos expandir este objeto com mais propriedades e métodos conforme necessário.



//OBS: O Alert não é reconhecido no NODE.JS , então usaremos console.log(); no lugar dos Alert's .