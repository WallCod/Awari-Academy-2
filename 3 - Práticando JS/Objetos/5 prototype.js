// Podemos adicionar propriedades e métodos a todas as instâncias de um objeto usando o prototype

Pessoa.prototype.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
};

pessoa1.saudacao(); //Olá, meu nome é Ana
pessoa2.saudacao(); //Olá, meu nome é Wallax