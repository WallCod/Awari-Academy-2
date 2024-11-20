// Script JS com Event Listeners
// no arquivo script.js, 
// vamos adicionar os event listeners para acionar a função de cálculo quando o botão for clicado.

document.getElementById('calcular').addEventListener('click', function() {
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;

    const resultado = calcularFrete(distancia, peso);

document.getElementById('resultado').innerText = `o custo do frete é R$ ${resultado.toFixed(2)}`;
});




// Demostrando funções e abordando argumentos em JavaScript 
// Vamos começar criando uma função simples para calcular o frete com base na distância e no peso do pacote.

function calcularFrete(distancia, peso) {
    const taxaDistancia = 0.5;
    const taxaPeso = 0.1;

    const custoDistancia = distancia * taxaDistancia;
    const custoPeso = peso * taxaPeso;

    const custoTotal = custoDistancia + custoPeso;
    return custoTotal;
}