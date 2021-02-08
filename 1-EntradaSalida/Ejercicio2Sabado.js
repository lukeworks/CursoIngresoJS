/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 2 clase Sabado
---------------------------------------
Enunciado:
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/

function mostrarDescuento()
{
    // declaro las variables que voy a necesitar.
    let nombreProducto;
    let precioProducto;
    let porcentajeDescuento;
    let descuento;
    let precioFinal;
    let mensaje;

    precioProducto = document.getElementById("txtIdImporte").value;
    precioProducto = parseFloat(precioProducto);
    nombreProducto = prompt("Por favor, ingrese el nombre del producto:");
    porcentajeDescuento = prompt("por favor, ingrese el porcentaje de descuento deseado:");
    porcentajeDescuento = parseFloat(porcentajeDescuento);

    descuento = precioProducto * porcentajeDescuento/100;
    precioFinal = precioProducto - porcentajeDescuento;

    mensaje = "usted compro un@ " + nombreProducto + " con " + porcentajeDescuento + " % de descuento.";
    mensaje =  mensaje + "el precio final es: " + precioFinal;

    txtIdResultado.value = mensaje; // .value es bidireccional
}