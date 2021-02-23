/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 9 WHILE
-------------------------------------------------
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = "es el primero";
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
		respuesta = prompt("Desea ingresar otro número? si/no:");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN