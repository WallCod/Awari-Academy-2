// Use for...in para iterar sobre as propriedades de um objeto

for (let chave in pessoa) {
    if (pessoa.hasOwnProperty(chave)) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}