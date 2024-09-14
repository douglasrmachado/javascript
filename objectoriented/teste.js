const nome = "Leandro";
const sobrenome = "Clayton";
const dataDeNascimento = "02/05/1990";

const pessoaA = {
    nome: "Leandro",
    sobrenome: "Clayton",
    dataDeNascimento: new Date("5-2-90"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

const pessoaB = {
    nome: "Josué",
    sobrenome: "Silva",
    dataDeNascimento: new Date("1-3-99"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

/*
console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.obterNomeCompleto());
console.log(pessoaA.dataDeNascimento.getFullYear());
console.log(pessoaA.obterAnoNascimento());

console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());
*/

// Constructor Function
function Pessoa(nome, sobrenome, dataDeNascimento,) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    this.amigos = [];
    this.obterAnoNascimento = () => {
        return this.dataDeNascimento.getFullYear();
    };
    this.adicionarAmigo = (amigo) => {
        if(!this.amigos.includes(amigo)) {
            this.amigos.push(amigo);
            amigo.amigos.push(this);
        }
    };
    this.selecionarAmigos = () => {
        return this.amigos.map((amigo) => amigo.obterNomeCompleto());
    },
    this.obterNomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa("Leandro", "Clayton", "2-5-90");
const pessoa2 = new Pessoa("Josué", "Silva", "1-6-99");
const pessoa3 = new Pessoa("Vinicius", "Nascimento", "7-6-60");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.obterAnoNascimento());
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.obterNomeCompleto());
pessoa1.adicionarAmigo(pessoa2);
pessoa1.adicionarAmigo(pessoa3);
console.log(`Amigos do ${pessoa1.nome}: `, pessoa1.selecionarAmigos());
console.log(`Amigos do ${pessoa2.nome}: `, pessoa2.selecionarAmigos());
console.log(`Amigos do ${pessoa3.nome}: `, pessoa3.selecionarAmigos());

// Intern Constructors
const nome2 = new String("Tico");
console.log(typeof nome2);
console.log(typeof "Tico");

const numero = new Number(5)
console.log(typeof numero);
console.log(typeof 5);