//Esto solo en los modullos nativos que no tienen promesas
//const { promisify } = require("node:util")
//const readFilePromise = promisify(fs.readFilePromise)

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer Texto", text);
});

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto", text);
});
