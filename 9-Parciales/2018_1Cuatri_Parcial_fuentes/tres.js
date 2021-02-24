/*
3
--(0,5 pts Pedir por prompt el precio y el porcentaje de descuento, mostrar el pre cio final con descuento por
id
*/
function mostrar()
{
var precio;
var porcentajeDescuento;
var precioFinal;

precio = prompt("Por favor, ingrese el precio:");
precio = parseFloat(precio);
porcentajeDescuento = prompt("Por favor, ingrese el porcentaje del descuento:");
porcentajeDescuento = parseFloat(porcentajeDescuento);

precioFinal = precio - (precio * porcentajeDescuento / 100);

elPrecioFinal.value = "El precio final con descuento es $" + precioFinal;
}
