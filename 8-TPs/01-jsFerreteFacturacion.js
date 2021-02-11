/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - TP 1
---------------------------------------
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var producto1;
    var producto2;
    var producto3;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;

    // NO olvidarme de parsear!
    // Ojo! el precio puede no ser un número entero (va float)

    producto1 = parseFloat(producto1);
    producto2 = parseFloat(producto2);
    producto3 = parseFloat(producto3);

    var suma;

    suma = producto1 + producto2 + producto3;
    suma = suma.toFixed(2); // Ojo! funciones son case sensitive! toFixed NO ToFixed (Camelcase!)

    alert("La suma de los 3 precios es igual a: $" + suma);
}
function Promedio () 
{
    var producto1;
    var producto2;
    var producto3;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;

    // NO olvidarme de parsear!

    producto1 = parseFloat(producto1);
    producto2 = parseFloat(producto2);
    producto3 = parseFloat(producto3);
    
    var promedio;

    promedio = (producto1 + producto2 + producto3)/3;
    promedio = promedio.toFixed(2);

    alert("El promedio de los 3 productos es: " + promedio);
}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;

    // NO olvidarme de parsear!

    producto1 = parseFloat(producto1);
    producto2 = parseFloat(producto2);
    producto3 = parseFloat(producto3);
    
    var iva;
    iva = 1.21;
    
    var sumarIva;
    sumarIva = producto1 * iva + producto2 * iva + producto3 * iva;
    sumarIva = sumarIva.toFixed(2);

    alert("El precio final con el 21% de IVA es igual a: $" + sumarIva);
}