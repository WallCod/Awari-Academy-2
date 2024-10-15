const btnSoma = document.getElementById('btnSoma');
const result = document.getElementById('result');

btnSoma.addEventListener('click', (e) => {
    e.preventDefault();

    const one = document.getElementById('one').value;
    const two = document.getElementById('two').value;

    result.innerHTML = Number(one)+Number(two);
})