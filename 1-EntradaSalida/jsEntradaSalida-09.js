/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 9
---------------------------------------
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var sueldo;
	sueldo = txtIdSueldo.value;
	// sueldo = parseFloat(sueldo); // Mal! parsé a float cuando la consigna es parsear a entero INT.
	sueldo = parseInt(sueldo);

	var aumento;

	aumento = (sueldo * 0.1) + sueldo; // con esta forma no me permite ver cual es la diferencia de ese 10%

	txtIdResultado.value = "El sueldo con aumento del 10% es: " + aumento;

	// alternativas:

	//aumento = sueldo *10/100; //op.1
	//var resultado;
	//resultado = sueldo + aumento;
	//resultado = sueldo *1.1; // op.2
	//txtIdResultado.value = resultado

	
}