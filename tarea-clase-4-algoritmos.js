//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

/*

for (let i = 1; i <= 10;i = i + 1 ){
  console.log(i);
}


/*
*/
//Desafìo de programación  #2: Imprimí los números impares del 1 al 100

//1 3 5 ... 99
/*

 for(let i = 1; i < 100; i = i + 2){
   console.log(i);
 }


/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

*/

//7x0 = 0
//7x1 = 7
//...
//7x9 = 63

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

*/

// TABLA DEL 1

function tablaDelUno() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 1;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 2

function tablaDelDos() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 2;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 3

function tablaDelTres() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 3;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 4

function tablaDelCuatro() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 4;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 5

function tablaDelCinco() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 5;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 6

function tablaDelSeis() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 6;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 7

function tablaDelSiete() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 7;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 8

function tablaDelOcho() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 8;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

// TABLA DEL 9

function tablaDelNueve() {
  for (let i = 1; i < 10; i++) {
    const multiplicando = 9;
    const resultado = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${resultado}`);
  }
}

/*
tablaDelOcho()

////// ARRIBA SE REALIZARON TABLAS POR SEPARADO, ABAJO TABLAS DE MULTIPLICACION CON FUNCION//////

function imprimirTablasMultiplicacion(multiplicador, multiplicando) {
  for (let i = 1; i <= multiplicador; i++) {
    for (let j = 1; j <= multiplicando; j++) {
      let multiplicación = i * j;
      console.log(`${i} * ${j} = ${multiplicación}`);
    }
  }
}

imprimirTablasMultiplicacion(100, 10);

/*
tablaDelUno()
tablaDelDos()
tablaDelTres()
tablaDelCuatro()
tablaDelCinco()
tablaDelSeis()
tablaDelSiete()
tablaDelOcho()
tablaDelNueve()
  
*/

/*
//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 
//[1,2,3,4,5,6,7,8,9,10]


// 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = 0

for(let i = 0; i<numeros.length; i++){
    resultado = resultado + numeros[i]; 
}

console.log(resultado);

*/

/* 
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let resultado = 10

for (let i = 0; i<numeros.length; i++){
    resultado = resultado * numeros[i];
}

console.log(resultado);

*/

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

/*
let numerosImpares = [];
let suma = 0;
for (let i = 0; i < 30; i++) {
  if (i > 10 && i < 30 && i % 2 != 0) {
    numerosImpares.push(i);
    
  }
}

for(let j = 0; j < numerosImpares.length; j++){
  suma += numerosImpares[j]
}

console.log(suma);
*/

//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

/*

function convertirTemperaturaCelciusAFahrenheit(){
  let gradosCelcius = Number(prompt ("Escriba los °Celcius que desee convertir a °Fahrenheit"));
  let gradosFahrenheit = 32;
    return gradosCelcius + gradosFahrenheit;
}



alert("La temperatura en °Fahrenheit es de " + convertirTemperaturaCelciusAFahrenheit() + "°");
                           
*/
//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

/*
function convertirTemperaturaFahrenheitACelcius(){
  let gradosFahrenheit = Number(prompt ("Escriba los °Fahrenheit que desee convertir a °Celcius"));
  let gradosCelcius = 32;
    return gradosFahrenheit - gradosCelcius;
}

alert("La temperatura en °Celcius es de " + convertirTemperaturaFahrenheitACelcius() + "°");

*/
/*
//Desafío de programación #10: Calcula la suma de todos los números en un array de números

const numeros = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let resultado = 0;

for ( let i = 0; i < numeros.length; i++){
    resultado += numeros[i];
    console.log(`${resultado}`);
}

*/

//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

/*
function promedioDeArray(numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado / numeros.length;
}
console.log(promedioDeArray([5, 6, 7, 8, 9]));
*/

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

/*

function filtrarNumerosPositivos(numeros) {
  const arrayDeNumerosPositivos = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 0) {
      arrayDeNumerosPositivos.push(numeros[i]);
    }
  } 
  return arrayDeNumerosPositivos
}

console.log(filtrarNumerosPositivos([-2, -4, -56, -20, 0, 1, -100, -52, 12]));

*/

//Desafío de programación #13: Find the maximum number in an array of numbers

/*
function encontrarMinimo(numeros) {
  let valorMinimo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < valorMinimo) {
      valorMinimo = numeros[i];
    }
  }
  return valorMinimo;
}

function encontrarMaximo(numeros) {
  let valorMaximo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > valorMaximo) {
      valorMaximo = numeros[i];
    }
  }
  return valorMaximo;
}

console.log(encontrarMinimo([-2, -4, -56, -20, 0, 1, -100, -52, 12]));

console.log(encontrarMaximo([-2, -4, -56, -20, 0, 1, -100, -52, 12]));

*/

//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

//Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
//El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/*
///////////////////////////////////////////

const fibonacci = (n) => {

  const result = [];
  let numeroAnterior = 0;
  let numeroNuevo = 1;

  for(let i = 0; i < n; i++) {

    let numeroAnteriorTemporario = 0;

    if (numeroNuevo < 3) {
      result.push(numeroAnterior);
    } else {
      result.push(numeroNuevo);
    }

    numeroAnteriorTemporario = numeroAnterior;
    numeroAnterior = numeroNuevo;
    numeroNuevo = numeroAnteriorTemporario + numeroNuevo;
  }

  return result;
}

//////////////////////////////////////////
/*

*/
/*
////////////////////////////////////////////
let numeros = [];
let cantidad = Number(prompt('¿Cuántos números de la sucesión de Fibonacci quieres ver?'))
function fibonacci(numeros){
  for(let i = 0; i < (cantidad - 1); i++){
    if (numeros.length === 0){
      numeros.push(0)
    }
    if(numeros[i] === 0){
      numeros.push(1)
    }
    else{
      numeros.push(numeros[i] + numeros[i - 1])
    }
  } 
  return numeros
};
console.log(`Los primeros ${cantidad} números de la sucesión de Fibonacci son ${fibonacci(numeros)}`)

*/
////////////////////////////////////////////

/*

// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(5);

console.log(findFibonacci(n));

*/

////////////////////////////////////////////

/*
function fibonacci(n) {

  const result = [];
  let numeroAnterior = 0;
  let numeroNuevo = 1;

  for(let i = 0; i < n; i++) {

    let numeroAnteriorTemporario = 0;

    if (numeroNuevo < 3) {
      result.push(numeroAnterior);
    } else {
      result.push(numeroNuevo);
    }

    numeroAnteriorTemporario = numeroAnterior;
    numeroAnterior = numeroNuevo;
    numeroNuevo = numeroAnteriorTemporario + numeroNuevo;
  }

  return result;
}

console.log(fibonacci(5));

////////////////////////////////////////////

*/

//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

// 1, 2, 3, 4, 5, 6, 7, 8
// numero que no sea igual a si mismo o a uno

//////// Se realizó ejercicio de numero primo con console.log

/*

let numero = Number(prompt("Ingrese un número"));

if (numero > 1) {
  let contador = 0;
  for (let i = 2; i < numero; i++) {
    let resto = numero % i;
    if (resto === 0) {
      contador += 1;
    }
  }
  if (contador === 0) {
    alert("Este es un número primo!");
  } else {
    alert("Este no es un número primo!");
  }
} else {
  alert("Este no es un número primo");
}

*/
/*
function encontrarNumeroPrimo(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(encontrarNumeroPrimo(Number(prompt("ingresar numero primo"))));
*/

/*

function sumarDigitosDeUnNumero(numero) {
  let sumatoriaDigitos = 0;
  let divisor = 10;

  while (numero % divisor <= numero) {
    sumatoriaDigitos += numero % divisor;

    if (numero % divisor === numero) {
      return sumatoriaDigitos;
    } else {
      numero = Math.trunc(numero / divisor);
    }
  }
}

const numeroAEvaluar = Number(prompt("Ingrese un numero (de 2 o mas cifras)"));

alert(
  `La sumatoria de los digitos de ${numeroAEvaluar} es ${sumarDigitosDeUnNumero(
    numeroAEvaluar
  )}`
);

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

Desafío de programación #18: Imprimir los primeros 100 números primos

*/
/*


function imprimirCienNumerosPrimos() {
  const numerosAImprimir = [];
  let contadorNumerosPrimos = 100;
  let numero = 2;
  while (contadorNumerosPrimos > 0) {
    let contadorDivisores = 0;
    for (i = 2; i < numero; i++) {
      if (numero % i === 0) {
        contadorDivisores++;
      }
    }
    if (contadorDivisores === 0) {
      numerosAImprimir.push(numero);
      contadorNumerosPrimos--;
    }
    numero++;
  }
  return numerosAImprimir;
}

console.log(imprimirCienNumerosPrimos());

*/

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números 

"n-primos" mayores que un número particular definido "alComienzo"

Ejemplo: 
Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]


const encontrarPrimerosNumerosPrimos = (NPrimosAPartirDelNumero,obtenerNumerosPrimos) => {

  const siguientesNumerosPrimos = [];
  let numero = NPrimosAPartirDelNumero;
  let numerosPrimos = 0;
  while (numerosPrimos < obtenerNumerosPrimos) {
    let contadorDivisores = 0;
    for (i = 2; i < numero; i++) {
      if (numero % i === 0) {
        contadorDivisores++;
      }
    }
    if (contadorDivisores === 0) {
      siguientesNumerosPrimos.push(numero);
      numerosPrimos++;
    }
    numero++;
  }
  return siguientesNumerosPrimos;
};

console.log(encontrarPrimerosNumerosPrimos(8, 9));
*/

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

const rotateArrayToRightOnePosition = (array) => {
  const arrayRotated = array.shift();
  array.push(arrayRotated);
  return newArray = array;
};

console.log(rotateArrayToRightOnePosition([7, 3, 4, 5, 6]));
*/

/* 
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

*/
/*
const rotateArrayToLeftOnePosition = (array) => {
  const arrayRotated = array.pop();
  array.unshift(arrayRotated);
  return newArray = array;
};

console.log(rotateArrayToLeftOnePosition([3, 4, 5, 6, 2]));

/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/

/*
const invertedArray = (array) => {
  newArray = [];
  while (array.length > 0) {
    numeros = array.shift()
    newArray.unshift(numeros)
  }
  return newArray;
}

console.log(invertedArray([6, 5, 4, 3, 2, 1]));
/*

/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/
/*
const reverseString = (invertedWord) => {
  let reversedStr = "";
  for (let i = invertedWord.length - 1; i >= 0; i--) {
    reversedStr += invertedWord[i];
  }
  return reversedStr;
}

reverseString("amargorPanitnegra");
*/

/*

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

/*
const joinArrays = (array1, array2) => {
  let oneArray = [...array1, ...array2];
  return oneArray;
};

console.log(joinArrays(["a", "b", "c"], [1, 2, 3]));
/*

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

*/
/*

const extractNotRepitedNumbers = (array1, array2) => {

  let intersection = array1.filter(x => array2.includes(x));
  return intersection;
};

extractNotRepitedNumbers([0, 1, 2, 5, 6, 9], [0, 1, 3, 4, 5, 7, 8, 9])
*/

/*

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
[5,1,2,3,4] y [3,4] debería devolver [5,1,2]

*/

/*
  const extractNotRepitedNumbers = (array1, array2) => {
  
    let difference = array1.filter(x => !array2.includes(x));
    return intersection;
  };
  
  extractNotRepitedNumbers([0, 1, 2, 5, 6, 9], [0, 1, 3, 4, 5, 7, 8, 9])

*/

/*

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

*/

/*
const extractDifferentNumbers = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(array) === -1){
      newArray.push(array[i]);
    }
  }
return newArray;
};

console.log(extractDifferentNumbers([1, 2, 3, 4, 5, 4, 3, 2, 1, 0]));

/*

////////////////////// INICIO EJERCICIOS DE HACKER RANK ////////////////////////////////////

function plusMinus(arr) {
    
  let amountOfPositiveNumbers = 0;
  let amountOfNegativeNumbers = 0;
  let amountOfZeroNumbers = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          amountOfPositiveNumbers++;
      }
      if (arr[i] < 0) {
          amountOfNegativeNumbers++
      }       
      if (arr[i] === 0) {
          amountOfZeroNumbers++;
      }
  }
  let proportionOfPositiveNumbers = amountOfPositiveNumbers / arr.length;
  let proportionOfNegativeNumbers = amountOfNegativeNumbers / arr.length;
  let proportionOfZeroNumbers = amountOfZeroNumbers / arr.length;
  
  proportionOfPositiveNumbers = (proportionOfPositiveNumbers).toFixed(6);
  proportionOfNegativeNumbers = (proportionOfNegativeNumbers).toFixed(6);
  proportionOfZeroNumbers = (proportionOfZeroNumbers).toFixed(6);

  console.log (proportionOfPositiveNumbers);
  console.log(proportionOfNegativeNumbers);
  console.log(proportionOfZeroNumbers);
  
}

console.log (plusMinus([1, 3, 0, 0, 0, -1, -2, -5, -1000]));

*/
/*
function staircase(n) {
  for (let x = 1; x <= n; x++) {
    console.log(" ".repeat(n - x) + "#".repeat(x));
  }
};

staircase(5);
*/

/*
function birthdayCakeCandles(candles) {
  let tallestCandles = 0;
  let max = Math.max(...candles);

  console.log(Math.max(...candles));
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      tallestCandles++;
    }
  }
  return tallestCandles;
}

console.log(birthdayCakeCandles([2, 2, 3, 4, 5, 5, 5]));
*/

/*
function breakingRecords(scores) {

  let maximumScore = scores[0];
  let minimumScore = scores[0];
  let highestRecord = 0;
  let lowestRecord = 0;
  const resultOfBreakingRecords = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maximumScore) {
      maximumScore = scores[i];
      highestRecord++;
    } if (scores[i] < minimumScore) {
      minimumScore = scores[i];
      lowestRecord++;
    }
  }
  resultOfBreakingRecords.push(highestRecord);
  resultOfBreakingRecords.push(lowestRecord);

  return resultOfBreakingRecords;
};

console.log(breakingRecords([5, 30, 5, 50, 4, 30, 60, 61, 2]))

////////////////////// FIN EJERCICIOS DE HACKER RANK ////////////////////////////////////
*/



/*

==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/
