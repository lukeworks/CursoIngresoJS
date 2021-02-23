/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 9 bis WHILE
-------------------------------------------------
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
9 bis( se pide el menor de los pares y el mayor de los negativos) // ERA SOLO ESTO! Ojo con las consignas!
*/
function mostrar()
{
	var banderaDelPrimero;
	var banderaMayorNegativos;
	var banderaMenorPares;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var numeroMaximoNegativo;
	var numeroParMinimo;
	var respuesta;

	banderaDelPrimero = "es el primero";
	banderaMayorNegativos = false;
	banderaMenorPares = false;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero" || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaDelPrimero == "es el primero" || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero";
		}
		if(banderaMenorPares == false || numeroIngresado % 2 == 0 && numeroIngresado == Math.min(numeroIngresado)) // chequear si hace falta el math.min y math.max
		{
			numeroParMinimo = numeroIngresado;
			banderaMenorPares == true;
		}
		if(banderaMayorNegativos == false || numeroIngresado < 0 && numeroIngresado == Math.max(numeroIngresado))
		{
			 numeroMaximoNegativo = numeroIngresado;
			banderaMayorNegativos = true;
		}
		respuesta = prompt("Desea ingresar otro número? si/no:");
	}
	txtIdMaximo.value=numeroMaximo + " y el mayor de los negativos es:" + numeroMaximoNegativo;
	txtIdMinimo.value=numeroMinimo + " y el menor de los pares es:" + numeroParMinimo;
}//FIN DE LA FUNCIÓN