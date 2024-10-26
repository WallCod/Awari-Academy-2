// AS funções construtoras permitem criar vários objetos semelhantes

function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}

let pessoa1 = new Pessoa('Ana', 30, 'Desenvolvedora');
let pessoa2 = new Pessoa('Wallax', 32, 'Desenvolvedor');
console.log(pessoa1.nome); // Ana
console.log(pessoa2.profissao); // Desenvolvedor