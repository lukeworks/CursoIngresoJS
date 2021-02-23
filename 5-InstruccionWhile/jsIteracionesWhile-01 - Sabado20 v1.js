/*
---------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 1 WHILE Sabado 20
---------------------------------------------------------
Enunciado:
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
*/
function mostrar()
{
	//repetir
		// pedir numero
		//evaluar si el numero cumple la condicion
			// si la cumple: cuento
	// muestro cuantos cumplen con la condicion

	var i;
	var numeroIngresado;
	var contadorRango10y20;

	i = 0;
	contadorRango10y20 = 0;

	while(i < 5)
	{
		numeroIngresado = prompt("Por favor, ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadorRango10y20 = contadorRango10y20 + 1;
			// contadorRango10y20++; IDEM arriba

		}
		i++;
	}
	alert("La cantidad de números que están entre 10 y 20 es: " + contadorRango10y20);
}//FIN DE LA FUNCIÓN