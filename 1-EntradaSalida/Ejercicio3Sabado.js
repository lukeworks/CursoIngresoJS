/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 3 clase Sabado
---------------------------------------
Enunciado:
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo
*/

function mostrarConsole()
{
    var primerNumero;
    var segundoNumero;
    var sumaNumeros;
    var promedioNumeros;
    var moduloPrimerNumero;
    var moduloSegundoNumero;
    var moduloNumeros;

    //primerNumero = document.getElementById("txtIdNumeroDividendo").value;
    //segundoNumero = document.getElementById("txtIdNumeroDivisor").value;

    primerNumero = txtIdNumeroDividendo.value;
    segundoNumero = txtIdNumeroDivisor.value;

    primerNumero = parseFloat(primerNumero);
    segundoNumero = parseFloat(segundoNumero);
    //primerNumero = primerNumero.toFixed(2);
    //segundoNumero = segundoNumero.toFixed(2); por algún motivo al aplicar toFixed, muestra los valores como (ejemplo abajo):
    /*
    La suma de los dos números es: 32.322.1 
    El promedio de los números es: 32.311.05 
    El módulo de los números (el primero en modulo del segundo) es: 10.199999999999996
    */

    // Suma de los dos números:
    sumaNumeros = primerNumero + segundoNumero;
    // Promedio de los dos números:
    promedioNumeros = primerNumero + segundoNumero/2;

    //Buscando encontré este método dentro de Javascript: https://www.w3schools.com/jsref/jsref_abs.asp
    // como el módulo es igual al valor absoluto de un número (siempre valor positivo) y la operación módulo sólo puede realizarse entre 2 números positivos, obtendremos primero el módulo de cada número:
    moduloPrimerNumero = Math.abs(primerNumero);
    moduloSegundoNumero = Math.abs(segundoNumero);
    
    // Módulo de los numeros (el primero en modulo del segundo). 
    moduloNumeros = primerNumero % segundoNumero; // usaremos el operador % (Remainder)

    console.log(" La suma de los dos números es: " + sumaNumeros ,'\n',"El promedio de los números es: " + promedioNumeros ,'\n',"El módulo de los números (el primero en modulo del segundo) es: " + moduloNumeros );
}