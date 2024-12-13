// Lista de Tarefas

const fs = require('fs');

const listaTarefa = [ {
    id: 1,
    descricao: "Comprar leite",
    completado: false
},
{
    id: 2,
    descricao: "Enviar relatório",
    completado: true
},
{
    id: 2,
    descricao: "Marcar consulta médica",
    completado: false
}
]

// Criando lista de tarefa em um arquivo JSON
fs.writeFileSync('listaTarefa.json', JSON.stringify(listaTarefa, null, 2));
console.log('Lista tarefa criada: listaTarefa.json');

// Imprimindo lista tarefa no console
console.log('listaTarefa criada', listaTarefa);