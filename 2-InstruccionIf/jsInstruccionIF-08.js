/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 8 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	var estadoCivil;
	var estadoCivil = document.getElementById("estadoCivil").value;
	
	if(edad < 18 && estadoCivil != 'Soltero')
	{
		return; // NO HACER NADA
	}
	else
	{
		alert("Es soltero y no es menor.");
	}
}
//FIN DE LA FUNCIÓN