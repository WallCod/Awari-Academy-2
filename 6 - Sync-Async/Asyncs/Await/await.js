/* O async/await é uma maneira mais moderna e limpa,
 de lidar com operações assíncronas que torna o código mais legível.*/

 console.log('Início');

 async function tarefaComAsyncAwait() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Executando tasrefa com async/await');
        }, 1000);
    });

    const mensagem = await promessa;
    console.log(mensagem);
 }

 tarefaComAsyncAwait();

 console.log('Fim');