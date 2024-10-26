// Você pode definir funções dentro de outras funções.
// As funções internas têm acesso às variáveis da função externa.

function externa() {
    let count = 0;
    return function interna() {
        count ++;
        return count;
    };
}
const contador = externa();
console.log(contador()); // 1
console.log(contador()); // 2