// Funções que se chamam a si mesmas. Útil para problemas que podem ser divididos em subproblemas menores.

function fatorial (n) {
    if (n == 0) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120