// functions in JS

const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar);
console.log(saludar2);

const getUsuarioActivo = (nombre) => {
  ({
    uid: "ABC567",
    username: nombre,
  });
};

console.log(getUsuarioActivo("carlos"));
console.log(getUsuarioActivo);
