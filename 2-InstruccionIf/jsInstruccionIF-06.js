/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 6 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 18)
	{
	alert("Usted es mayor de edad.");
	}
	else
	{
	if (edad > 12 && edad < 18)
	{
	alert("Usted es un@ adolescente");
	}
	else
	{
	if (edad < 13)
	{
	alert("Usted es un@ niñ@");
	}
	}
	}
}
//FIN DE LA FUNCIÓN