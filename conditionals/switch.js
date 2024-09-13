const cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor é vermelho!");
        break;
    case "verde":
        console.log("A cor é verde!");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    default:
        console.log("A cor não é vermelho, nem verde e nem azul!");
} 



const contador = 3;

switch (contador) {
    case 5:
        console.log("5");
    case 4:
        console.log("4");
    case 3:
        console.log("3");
    case 2:
        console.log("2");
    case 1:
        console.log("1");
    default:
        console.log("BOOOOOOOOOOOM!!!!!!!!");
}

const sexo = "m";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
        break;
    case "F":
    case "f":
        console.log("Feminino");
        break;
    default:
        console.log("Inválido");
}

let numero;

if (cor == "azul") {
    numero = 10;
} else {
    numero = 20;
}

console.log(numero);

// Using Ternary Operator
let numero2 = cor == "vermelho" ? 10 : 20;
console.log(numero2);