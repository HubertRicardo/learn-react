const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2] = personajes;

console.log(p2);

//Al hacer esto lo que estamos haciendo es crear una funcion con
//el primer dato de array y las comas se aplican para pasar de dato

const retornarArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = usState("Goku");

console.log(nombre);
setNombre();
