/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 4
--------------------------------------------------------
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) {
		// asgino los casos de meses con 31 días
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.");
			break;
		// asigno los casos de meses con 30 días
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.");
			break;
		// asigno los casos de meses con 28 días
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
	}
}//FIN DE LA FUNCIÓN