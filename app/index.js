import CodersArray from "./CodersArray.js";

const names = new CodersArray("Marta", "Andru", "Berta");
const numbers = new CodersArray(1, 2, 3, 4);

console.log(names.textFilter((name) => name === 5));
console.log(names.length());
