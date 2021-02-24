/*
4
--(0,5 pts ( Pedir dos números y mo str ar el resultado :
Si son iguales los muestro concatenados. Si el primero es mayor, los resto, de lo contrario los sumo.
Si la suma es mayor a 10 además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero
el 10".
*/
function mostrar()
{
var numeroUno;
var numeroDos;
var suma;

numeroUno = prompt("Por favor, ingrese el primer número:");
numeroUno = parseFloat(numeroUno);
numeroDos = prompt("Por favor, ingrese el primer número:");
numeroDos = parseFloat(numeroDos);

if(numeroUno == numeroDos)
{
    suma = alert(numeroUno + "" + numeroDos);
}
else
{
    if(numeroUno > numeroDos)
    {
        suma = numeroUno - numeroDos;
    }
    else
    {
        suma = numeroUno + numeroDos;
    }
    if(numeroUno + numeroDos > 10)
    {
        suma = numeroUno + numeroDos;
        alert("la suma es: "+ suma + " y supero el 10");
    }
    else
    {
        alert("la suma es: "+ suma + " y no supero el 10");
    }
 
}

}