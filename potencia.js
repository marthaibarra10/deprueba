/*
p = potencia = mgh / t; donde;
P es potencia en (KW);
m es masa (kg);
g es gravedad (m/s2);
h es la altura (m);
t es el tiempo (s)
*/

//Problema 
//Una de 40 kg se eleva hasta 20 m en 3s
//Que potencia se ha utilizado?


//Paso 1 defino mis variables
var masa = parseInt(prompt("¿Cual es la masa? (kg)"));
const gravedad = 9.8;
var altura = parseInt(prompt("¿Cual es la altura? (m)"));
var tiempo = parseInt(prompt("¿En cuanto tiempo lo hace? (s)"));

//Paso 2 realizar la operación

var potencia = (masa * gravedad * altura) / tiempo;

//Paso 3 Imprimir el resultado 
console.log(potencia);