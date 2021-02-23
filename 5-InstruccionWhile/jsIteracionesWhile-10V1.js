/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 10 WHILE
-------------------------------------------------
Enunciado:
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-se pide el minimo de los pares y el maximo de los negativos*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var maximoNegativo;
	var minimoPar;

	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	cantidadPositivos = 0;
	promedioNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Por favor, ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("ERROR! Por favor, ingrese un número:");
			numeroIngresado = parseInt(numeroIngresado);
		}

		console.log(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			if(cantidadNegativos == 0 || numeroIngresado > maximoNegativo)
			{
				maximoNegativo = numeroIngresado;
			}
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if(numeroIngresado % 2 == 0)
		{
			if(numeroIngresado < minimoPar || cantidadPares == 0) // cantidadpares == 0 al final porque como despues de la primera vez no vuelve a cumplirse, no tiene que volver a calcularlo..
			{
				minimoPar = numeroIngresado;
			}
			cantidadPares++;
		}
		respuesta = prompt("desea ingresar mas números? si/no:");
	}
	// Diferencia entre positivos y negativos, (positvos-negativos)
	diferenciaPositivosNegativos = acumuladorPositivos - acumuladorNegativos;

	document.write("la suma de números negativos es: " + acumuladorNegativos + "<br>");
	document.write("la suma de números positivos es: " + acumuladorPositivos + "<br>");
	document.write("la cantidad de números positivos es: " + cantidadPositivos + "<br>");
	document.write("la cantidad de números negativos es: " + cantidadNegativos + "<br>");
	document.write("la cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("la cantidad de números pares es: " + cantidadPares + "<br>");
	document.write("la diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + "<br>");
	
	//Calculo los promedios..

	if(cantidadPositivos != 0)
	{
		promedioPositivos = acumuladorPositivos / cantidadPositivos;
		document.write("el promedio de los números positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("el promedio de los números positivos es: no se han ingresado números positivos.");
	}
	if(cantidadNegativos != 0)
	{
		promedioNegativos = acumuladorNegativos / cantidadNegativos;
		document.write("el promedio de los números negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("el promedio de los números negativos es: no se han ingresado números negativos.");
	}
	
	
}//FIN DE LA FUNCIÓN

/*

Contadores:

contador = contador + 1;
contador++
contador += valor; // no tan usual para un contador..

Acumuladores:

acumulador = acumulador + valor;
acumulador += valor;

*/