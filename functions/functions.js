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

function criar_nome_completo(nome, sobrenome, sexo) {
    sexo = sexo.toUpperCase();
    if(sexo == "M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F") {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    }
}

const nomeCompleto = criar_nome_completo("Leandro", "Clayton", "m");
const nomeCompleto2 = criar_nome_completo("Julia", "Silva", "F");

dizer_ola(nomeCompleto);
dizer_ola(nomeCompleto2);

// Arrow Functions

const dizer_oi = () => console.log("Oi");
dizer_oi();

const dizer_oi_tudo_bem = () => {
    console.log("Oi!");
    console.log("Tudo bem?");
}
dizer_oi_tudo_bem();

const somar = (x, y) => {
    return x + y;
}

const resultado = somar(10, 15);

console.log(resultado);
