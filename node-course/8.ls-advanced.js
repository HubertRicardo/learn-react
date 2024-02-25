const { error } = require("node:console");
const fs = require("node:fs/promises");

const folder = process.argv[2] ?? ".";

//se tiene otro tipo de lista
//Podemos pasar la carpeta donde queres x ejemplo el ls
fs.readdir(folder)
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((error) => {
    if (err) {
      console.log("Error al leer el directorio", err);
      return;
    }
  });
