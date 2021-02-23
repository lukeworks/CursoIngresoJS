/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 3 WHILE con 3 intentos
-------------------------------------------------
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	var claveIngresada;
	var intentos;
	intentos = 0;

	claveIngresada = prompt("ingrese la contraseña: ");

	while(claveIngresada != "utn750" && intentos < 2)
	{
		claveIngresada = prompt("reingrese la contraseña: ");
		intentos = intentos +1;

		if(intentos == 2)
		{
			alert("Ha superado la cantidad de intentos.");
		}
		else
		{
			claveIngresada = prompt("reingrese la contraseña: ");
		}
	}
	
	if(claveIngresada == "utn750")
	{
		alert("la contraseña es correcta.");
	}
}//FIN DE LA FUNCIÓN
