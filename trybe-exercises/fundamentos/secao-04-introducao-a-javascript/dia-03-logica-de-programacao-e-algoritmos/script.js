console.log("Fatorial de 10:");
const factor = 10;
let factorial = 1;
for (let index = 1; index <= factor; index += 1) {
  factorial *= index;
}
console.log(factorial);

console.log("\nInvertendo a palavra:");
let word = "tryber";
let invertedWord = "";
for (let index = 1; index < word.length + 1; index += 1) {
  invertedWord += word[word.length - index];
}
console.log(invertedWord);

console.log("\nMaior palavra do array:");
let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = "";
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}
console.log(biggestWord);

console.log("\nMenor palavra do array:");
let array2 = ["java", "javascript", "python", "html", "css"];
let smallestWord = "";
for (let index = 0; index < array.length; index += 1) {
  smallestWord = array[index];
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}
console.log(smallestWord);
