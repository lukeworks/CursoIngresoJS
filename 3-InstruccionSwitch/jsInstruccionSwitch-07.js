/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 7
--------------------------------------------------------
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert(destinoIngresado + " se encuentra al sudoeste");
			break;
		case "Cataratas":
			alert(destinoIngresado + " se encuentra al noreste");
			break;
		case "Mar del plata":
			alert(destinoIngresado + " se encuentra al sudeste");
			break;
		case "Ushuaia":
			alert(destinoIngresado + " se encuentra al sudeste");
			break;
	}

}//FIN DE LA FUNCIÓN