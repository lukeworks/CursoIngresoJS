/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 5 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad < 13)
	{
		if(edad > 17)
		{
		alert("Usted no es adolescente");
		}
	}
}
//FIN DE LA FUNCIÓN