// Essa função avalia a nota de um aluno e imprime uma mensagem no console com base na nota fornecida.

function avaliaAluno(nota) {
    if (nota >= 6) {
        console.log("Aluno aprovado.");
    } else if (nota >= 4 && nota < 6) {
        console.log("Aluno em recuperação");
    } else {
        console.log("Aluno reprovado.");
    }
}


avaliaAluno(5); //Teste inicial






//Como Funciona:
//Se a nota for maior ou igual a 6, a mensagem "Aluno aprovado." é impressa.

//Se a nota for maior ou igual a 4 e menor que 6, a mensagem "Aluno em recuperação." é impressa.

//Se a nota for menor que 4, a mensagem "Aluno reprovado." é impressa.