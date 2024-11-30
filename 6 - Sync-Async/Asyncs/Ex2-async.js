// Exemplo simples de código Assíncrono com setTimeout

console.log('Início');

function tarefaAssíncrona() {
    setTimeout(() => {
        console.log('Executando tarefa assíncrona');
    }, 1000);
}

tarefaAssíncrona();

console.log('Fim');

/* Note que o setTimeout permite que o código continue executando sem esperar pela tarefa assíncrona. */