/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 8
--------------------------------------------------------
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("En " + destinoIngresado + " hace frío.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En " + destinoIngresado + " hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN