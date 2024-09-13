const tarefas =  [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Jogar LoL",
        completo: true
    },
    {
        id: 3,
        texto: "Lavar o carro",
        completo: false
    }
];

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].texto}`);
}

for (let tarefa of tarefas) {
    console.log(tarefa.texto);
}