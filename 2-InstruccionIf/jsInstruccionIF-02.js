/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 2 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad.
*/

function mostrar()
{
	//tomo la edad 
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Usted SI ES mayor de edad");
	}
	/*
	anulamos el else ya que debe informar SOLO si la persona es mayor de edad
	else
	{
		alert("Usted NO ES mayor de edad");
	}
	*/
	
}
//FIN DE LA FUNCIÓN