/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 4 WHILE
-------------------------------------------------
Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado < 0 || numeroIngresado > 9) // NO && porque no existe un numero que cumpla las dos condiciones a la vez
	{
		alert("Ingresaste un número que está por fuera de los valores requeridos.");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	alert("Ingresaste un número que está dentro de los valores requeridos.");
}//FIN DE LA FUNCIÓN