/*alert ('Olá Mundo');

let variavel = 'awari';
alert(variavel);
variavel = 10;
alert(variavel);

const constante = 'Fluency';
alert(constante);  */ 

const btnBuscaCep = document.getElementById('btnBuscaCep');

btnBuscaCep.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        return res.json();
    }).then((response) => {
        console.log (response);
        const enderecoList = document.getElementById('endereco-list');
        enderecoList.innerHTML = ''; // Limpa a lista
        const enderecos = [
        `Cep: ${response.cep}`,
        `Rua: ${response.logradouro}`,
        `Bairro: ${response.bairro}`,
        `Município: ${response.localidade}`,
        `Estado: ${response.uf}`,
        `Região: ${response.regiao}`,
        `DDD: ${response.ddd}`
        ];

        enderecos.forEach(endereco => {
            const li = document.createElement('li');
            li.textContent = endereco;
            enderecoList.appendChild(li);
        });
    }).catch((error) => {
        console.error(error);
    });
} );

