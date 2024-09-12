const nome = "Leandro";
const sobrenome = 'Clayton';
const idade = 20;

// Concatenation
const apresentacao = "Meu nome é " + nome + " " + 
sobrenome + " e eu tenho " + idade + " anos.";
console.log(apresentacao);

// String template
const apresentacao2 = `Meu nome é ${nome} 
${sobrenome} e eu tenho ${idade} anos.`
console.log(apresentacao2);


const s = "Olá Mundo!";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log(s.substring(0, 5));

console.log(s.split(""));
console.log(s.split(" "));