//Essas são funções definidas com a palavra-chave function.
// Elas são "hoisted", ou seja, você pode chamá-las antes de serem definidas no código.

function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao('Ana')); // Olá, Ana!