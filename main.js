const saludar = () => {
    return "Hola"
};

const division = (a,b) => a/b;

const miNombre = (nombre) => console.log (`Mi nombre es ${nombre}`);

const test2 = () => console.log("Función test 2 ejecutada.");

const test1 = (test2) => test2();
  
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];


//   Crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayores25 = []
gente.forEach(persona =>{
  if (persona.edad >= 25){
mayores25.push(persona)
}}
);
console.log(mayores25)

// Crea un array con la gente que empieza por J. 
const nombresJ = [];
gente.forEach(persona => {
  if (persona.nombre[0]==="J"){
    nombresJ.push(persona)
  }
}
  );
console.log(nombresJ);

// Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayoresVeinticinco = gente.map(persona =>{
  if (persona.edad > 25){
    return persona
  }
});
console.log(mayoresVeinticinco)


// Crea un array con la gente que empieza por J. 
const nombresConJ = gente.map (persona =>{
 if (persona.nombre[0]==="J"){
  return persona
 }
});
console.log (nombresConJ);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const numElevado = numbers.map(num => {
  
}); 

newNumbers = numbers.map((value) => value ** value)
console.log(newNumbers)
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
const multiplicar = numeros.reduce((value)=> value * value)
console.log(multiplicar)