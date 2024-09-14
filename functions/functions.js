function dizer_ola(nome = "Fulano") {
    console.log("Olá " + nome);
}

dizer_ola("Leandro");
dizer_ola("Josué");
dizer_ola("Vinicius");
dizer_ola();

function se_apresentar(nome="Fulano", idade = "x") {
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos");
}

se_apresentar("Maria", 30);
se_apresentar("Bruno", 25);
se_apresentar("Miguel");

function criar_nome_completo(nome, sobrenome) {
    return `${nome} ${sobrenome}`; 
}

const nomeCompleto = criar_nome_completo("Leandro", "Clayton");

dizer_ola(nomeCompleto);
console.log(nomeCompleto);