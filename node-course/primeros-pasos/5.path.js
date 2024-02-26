const path = require("node:path");

// unir rutas con path.join
//barra separadora de carpetas segun sistema operativo
// console.log(path.sep);

const filePath = path.join("content", "subfolder", "test.txt");

console.log(filePath);

//nombre del fichero
const base = path.basename("/tmp/hub-secret-files/password.txt");

console.log(base);

//para la extencion
const extencion = path.extname("image.jpg");

console.log(extencion);
