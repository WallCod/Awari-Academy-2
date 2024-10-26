// Podemos criar um objeto usando a notação literal de objetos.

let pessoa = {
    nome: 'Wallax',
    idade:32,
    profissao: 'Desenvolvedor',
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

// Acessando propriedades e métodos
// Para acessar as propriedades de um objeto, use a notação de ponto ou colchetes

console.log(pessoa.nome); // Wallax
console.log(pessoa.idade); // 32
pessoa.saudacao(); // Olá, meu nome é Wallax

// Adicionando e removendo propriedades
// Podemos adicionar ou remover propriedades de um objeto a qualquer momento

pessoa.endereco = 'Rua figueroa, 777';
console.log(pessoa.endereco); // Rua figueroa, 777

delete pessoa.profissao;
console.log(pessoa.profissao); // undefined