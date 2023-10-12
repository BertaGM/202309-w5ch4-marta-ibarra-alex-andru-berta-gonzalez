import CodersArray from "./CodersArray/CodersArray.js";

const numbers = new CodersArray("one", 2, "three", 4, "five");

const coders = ["Berta", "Marta", "Andru", 4, 5];

const listOfCodersAndNumbers = new CodersArray(numbers, coders);

console.log(listOfCodersAndNumbers.length);
// Console.log(listOfCodersAndNumbers.data);
