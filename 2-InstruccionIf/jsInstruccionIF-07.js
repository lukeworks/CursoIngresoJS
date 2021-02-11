/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 7 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	var estadoCivil;
	var estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18  && estadoCivil != 'Soltero')
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		alert("Es lo suficientemente mayor para NO ser soltero.");
	}
}
//FIN DE LA FUNCIÓN