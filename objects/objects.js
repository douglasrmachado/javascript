const nome = "Leandro";
const sobrenome = "Clayton";
const idade = 18;
const passatempos = ["música", "dança", "lol"];
const enderecoRua = "Praia de Leste";
const enderecoCidade = "Pontal do Paraná";
const enderecoEstado = "PR";

// Creating a object with proprieties
const pessoa = {
    nome: "Leandro",
    sobrenome: "Clayton",
    idade: 20,
    passatempos: ["música", "dança", "lol"],
    endereco: {
        rua: "Praia de Leste",
        cidade: "Pontal do Paraná",
        estado: "PR"
    }
}

// Acessing a propriety
console.log(pessoa.nome);

// Acessing a vector's element
console.log(pessoa.passatempos[1]);

// Acessing a propriety of a propriety
console.log(pessoa.endereco.rua);

// Defining a new propriety
pessoa.email = "leandropclayton@gmail.com";
console.log(pessoa);

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

// Acessing a specific element's propriety
console.log(tarefas[1].texto);

// Formating a object in JSON format
console.log(JSON.stringify(tarefas));
console.log(JSON.stringify(pessoa));
