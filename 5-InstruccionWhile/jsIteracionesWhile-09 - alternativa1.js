/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var bandera;
	
	respuesta = "si"; // variable de respuesta o FLAG
	bandera = "es el primer número";

	// NUNCA, PERO NUNCA INICIALIZAR MAXIMOS Y MINIMOS!
	//numeroMaximo = -1000; // porque? porque parto de un numero en negativo grande porque cualquier valor que ingrese cumple la condicion de ser mayor que -1000
	//numeroMinimo = 1000; // porque? porque cualquier valor que ingrese va a ser menor que 1000 (siempre partiendo de la base que no pongan un valor a 1000...) 

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "es el primer número" || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			//bandera = "no es el primer número";
		}
		if(bandera == "es el primer número" || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			bandera = "no es el primer número"; // lo dejo dentro del if porque es una condicion que se va a dar unicamente en el if aca y el de arriba
		}
		/*if(bandera == "es el primer número")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = "no es el primer número";
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}*/

		respuesta = prompt("Desea ingresar otro número? si/no");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN