/*
-----------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 2 WHILE Sabado 20
-----------------------------------------------------------
Enunciado:
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/
function mostrar()
{
	var contadorCantidadNumeros;
	var numeroIngresado;
	var contadorRango10y20;
	var promedio;
	var respuesta;
	var sumaDeNumeros;

	contadorCantidadNumeros = 0;
	contadorRango10y20 = 0;
	respuesta = "si";
	sumaDeNumeros = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Por favor, ingrese el " + contadorCantidadNumeros + "°" + "número:");
		numeroIngresado = parseInt(numeroIngresado);
		

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadorRango10y20 = contadorRango10y20 + 1;
			sumaDeNumeros = sumaDeNumeros + numeroIngresado;
		}
		contadorCantidadNumeros++;
		
		respuesta = prompt("Quiere seguir agregando números?");
	}
	
	promedio = sumaDeNumeros / contadorRango10y20;

	alert("La cantidad de números que están entre 10 y 20 es: " + contadorRango10y20 + " y el promedio de estos es: " + promedio);
}//FIN DE LA FUNCIÓN