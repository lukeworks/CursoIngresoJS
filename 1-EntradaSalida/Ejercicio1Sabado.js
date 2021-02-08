/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 1 clase Sabado
---------------------------------------
Enunciado:
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/

function mostrar()
{
    // delcaro las variables que voy a necesitar. Nota: en este ejercicio y en base al Html utilizado, es muy importante el orden de los elementos.
    let precio;
    let descripcion;
    let aumento;

    precio = parseFloat(precio);
    
    precio = document.getElementById("txtIdNombre").value;

    // defino la variable aumento después de tomar el valor de precio, sino aumento = NaN
    aumento = precio * 1.3;
    aumento = aumento.toFixed(2);

    descripcion = prompt("Por favor ingrese la descripcion:")

    alert("El producto descrito es: " + descripcion + " y el precio con aumento incluído es: " + aumento);
}