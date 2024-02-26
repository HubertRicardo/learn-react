import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo...");
const text = await fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer Texto", text);
});

console.log("---->Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo");
const secondText = await fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto", text);
});
