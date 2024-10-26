// Você pode definir valores padrão para os parâmetros de uma função.

function dividir(a, b = 1) {
    return a / b; 
}
console.log(dividir(10)); // 10