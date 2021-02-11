/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 3 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17)//(edad >= 18) al usar > 17, aligero la operacion a procesar por el procesador, es mas ágil. SIEMPRE BUSCAR LA FORMA MAS EFICIENTE Y LIVIANA DE RESOLVER UN PROBLEMA
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}
}
//FIN DE LA FUNCIÓN