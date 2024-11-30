// Exemplop com Promises

console.log('Início');

function tarefaComPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Executando tarefa com Promise');
        }, 1000);
    });
}

tarefaComPromise().then(mensagem => {
    console.log(mensagem);
});

console.log('Fim');







 
/* Uma maneira comum de lidar com operações assíncronas é usar Promises.
 Elas representam um valor que pode estar disponível agora, no futuro ou nunca. */