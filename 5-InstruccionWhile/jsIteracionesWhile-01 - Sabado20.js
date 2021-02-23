/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 1 WHILE Sabado 20
-------------------------------------------------
Enunciado:
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
*/

// Aca elabore demasiado, partiendo de la base que pense que debia mostrar dos resultados diferentes para 10 y para 20..
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	//var numeros;
	var contadorNumeros;
	var contadorNumerosMenoresA20;
	var contadorNumerosMayoresA10;

	contadorNumeros = 0;

	numeroUno = prompt("por favor, ingrese un número:");
	numeroUno = parseInt(numeroUno);
	contadorNumeros = contadorNumeros + 1;
	numeroDos = prompt("por favor, ingrese un número:");
	numeroDos = parseInt(numeroDos);
	contadorNumeros = contadorNumeros + 1;
	numeroTres = prompt("por favor, ingrese un número:");
	numeroTres = parseInt(numeroTres);
	contadorNumeros = contadorNumeros + 1;
	numeroCuatro = prompt("por favor, ingrese un número:");
	numeroCuatro = parseInt(numeroCuatro);
	contadorNumeros = contadorNumeros + 1;
	numeroCinco = prompt("por favor, ingrese un número:");
	numeroCinco = parseInt(numeroCinco);
	contadorNumeros = contadorNumeros + 1;

	while(contadorNumeros == 5)
	{
		if(numeroUno > 9 && numeroDos > 9 && numeroTres > 9 && numeroCuatro > 9 && numeroCinco > 9)
		{
			contadorNumerosMayoresA10 = contadorNumeros - 1;
		}
		else
		{
			if(numeroUno > 9 && numeroDos > 9 && numeroTres > 9 && numeroCuatro > 9 && numeroCinco > 9)
			{
				contadorNumerosMayoresA10 = contadorNumeros - 1;
			}
		}
	}
	alert ("La cantidad de números mayores a 10 es: " + contadorNumerosMayoresA10 + " y la cantidad de números menores a 20 es: " + contadorNumerosMenoresA20);
}//FIN DE LA FUNCIÓN

/*
		if(numeroUno < 21 && numeroDos < 21 && numeroTres < 21 && numeroCuatro < 21 && numeroCinco < 21)
		{
			contadorNumerosMenoresA20 = contadorNumeros - 1;
			alert ("la cantidad de números menores a 20 es: " + contadorNumerosMenoresA20);

		if(numeros < 21)
		{
			cantidadMenorA20 = cantidadMenorA20 +1;
			alert("La cantidad de números menores a 20 es: " + cantidad);
		}
		else
		{
			if(numeros > 9)
			{
				cantidadMayorA10 = cantidadMayorA10 +1;
				alert("La cantidad de números mayores a 10 es: " + cantidad);
			}
		}
		*/