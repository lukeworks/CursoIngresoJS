/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 10
---------------------------------------
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	var importe;
	importe = txtIdImporte.value;
	importe = parseInt(importe);

	var descuento;

	descuento = importe - (importe * 0.25);
	txtIdResultado.value = "El resultado con 25% de descuento es: " + descuento;

	// alternativas:
	
	//opción 1:
	//descuento = importe - (importe *25/100); 
	//txtIdResultado.value = descuento

	//opción 2:
	//var resultado;
	//descuento = importe * 0.25;
	//resultado = importe - descuento;
	//txtIdResultado.value = resultado

}
