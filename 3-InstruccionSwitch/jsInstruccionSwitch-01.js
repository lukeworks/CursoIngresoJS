/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 1
--------------------------------------------------------
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break; // para el caso previo
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
			default: // valor por defecto si no encuentra ninguno de los casos anteriores
				alert("Ningún registro");
	}

}