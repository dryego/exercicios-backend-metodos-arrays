const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let inverter = frutas.slice();
inverter.reverse();

console.log(inverter.join(", "));

frutas.shift();
frutas.pop();
frutas.push("Melão");

console.log(frutas);