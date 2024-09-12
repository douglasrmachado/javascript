const vetor = ["A", 10, "oi", 1.5, true];

console.log(vetor);

const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçãs", "laranjas", "peras", "uvas"];

console.log(numeros, frutas);


// Obtain a value
console.log(frutas[0]);
console.log(frutas[1]);

//Add a element to the vector
frutas[4] = "melancia";
console.log(frutas);

// We can change the element value
frutas[1] = "limão";
console.log(frutas);

// Add a element to the vector's ending
frutas.push("morangos");
console.log(frutas);

// Add a element to the vector's beggining
frutas.unshift("mangas");
console.log(frutas);

// Removes a element of the vector's ending
const fruta_removida = frutas.pop();
console.log(frutas);
console.log(fruta_removida);

// Removes a element of the vector's beggining
const fruta_removida2 = frutas.shift();
console.log(frutas);
console.log(fruta_removida2);

// Discover the element's number
console.log(frutas.indexOf("limão"));

// Discover if it is a vector or not
console.log(Array.isArray(frutas));
console.log(Array.isArray(10));
console.log(Array.isArray("Hello"));

