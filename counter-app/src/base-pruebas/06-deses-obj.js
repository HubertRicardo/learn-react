//Desestructuracion
//Asignacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 21,
  clave: "Ironman",
};

const { nombre } = persona;

console.log(persona.nombre);

console.log(nombre);

const usContext = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlong: {
      lat: 14.222,
      lng: -2.2312,
    },
  };
};

const {
  nombreClave,
  anios,
  latlong: { lat, lng },
} = usContext(persona);

console.log({ nombreClave, anios });
console.log({ lat, lng });
