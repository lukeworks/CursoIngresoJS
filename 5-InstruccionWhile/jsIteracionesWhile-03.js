/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 3 WHILE
-------------------------------------------------
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese la contraseña: ");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("reingrese la contraseña: ");
	}
	alert("la contraseña es correcta.");
	
}//FIN DE LA FUNCIÓN
