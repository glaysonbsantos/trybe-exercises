/* 
Percorra o array imprimindo todos os valores nele contidos com a função console.log();

Some todos os valores contidos no array e imprima o resultado;

Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

Utilizando for, descubra qual o maior valor contido no array e imprima-o;

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

Utilizando for, descubra qual o menor valor contido no array e imprima-o;

Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log("\n" + sum);

let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  media += numbers[index];
}
media /= numbers.length;
console.log("\n" + media);

if (media > 20) {
  console.log("\nValor maior que 20");
} else {
  console.log("\nvalor menor ou igual a 20");
}

let biggestNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];
  }
}
console.log("\n" + biggestNumber);

let smallestNumber = null;
for (let index = 0; index < numbers.length; index += 1) {
  if (index === 0) {
    smallestNumber = numbers[index];
  } else {
    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index];
    }
  }
}
console.log("\n" + smallestNumber);

let myArray = [];
for (let index = 1; index <= 25; index += 1) {
  myArray.push(index);
}
console.log("\n" + myArray + "\n");

for (let number of myArray) {
  number /= 2;
  console.log(number);
}
