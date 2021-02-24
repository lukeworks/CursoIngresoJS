/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 5
--------------------------------------------------------
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	
	switch (horaDelDia) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.");
			break;
			/*if(horaDelDia == "7" ||horaDelDia == "8" || horaDelDia == "9" || horaDelDia == "10" || horaDelDia == "11")
			{
				alert("Es de mañana.");
			}
			else
			{
				return;
			}

			break;
	*/
		default:
			alert("No ingresaste un horario correspondiente a la mañana.");
			break;
	}

}//FIN DE LA FUNCIÓN
