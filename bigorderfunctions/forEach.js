const numeros = [1, 2, 3, 4, 5,];

numeros.forEach(function (numero) {
    console.log(numero);
}) 

const letras = ["A", "B", "C", "D", "E"];

// forEach Method
letras.forEach(function (letra, indice) {
    console.log(`${indice}: ${letra}`);
})

const tarefas = [
    {
        id: 1, 
        texto: "Estudar",
        completo: false
    },
    {
        id: 2, 
        texto: "Trabalhar",
        completo: false
    },
    {
        id: 3, 
        texto: "Limpar a casa",
        completo: true
    },
]

// forEach Method
tarefas.forEach(function (tarefas, indice, minhasTarefas) {
    console.log(`${indice + 1}: ${tarefas.texto}`);
    console.log(minhasTarefas);
})

// Map Method
const vetorDeTextosDasTarefas = tarefas.map(function (tarefa) {
    return `Tarefa ${tarefa.id}: ${tarefa.texto}`;
});

console.log(vetorDeTextosDasTarefas);

// Filter Method
const tarefa1 = tarefas.filter(function (tarefa) {
    return tarefa.id === 1;
});

console.log(tarefa1);

// Reduce Method
const vetor = [1, 2, 3, 4];
const valorInicial = 0

const soma = vetor.reduce(function (acumulador, elementoAtual) {
    return acumulador + elementoAtual
}, valorInicial);


console.log(soma);
/* 

acumulador = 0

[ 1 , 2, 3, 4]

0 + 1 = 1

acumulador = 1 

[ 2 , 3, 4]

1 + 2 = 3

acumulador = 3

[ 3 , 4]

3 + 3 = 6

acumulador = 6

[ 4 ]

6 + 4 = 10

acumulador = 10

*/
