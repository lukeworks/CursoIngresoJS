/*
1
--(0,5 pts Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el
    */
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho = prompt("Por favor, ingrese en ancho del rectángulo:");
ancho = parseFloat(ancho);
largo = prompt("Por favor, ingrese en largo del rectángulo:");
largo = parseFloat(largo);

perimetro = (ancho * 2) + (largo *2);

alert("el perímetro del rectángulo es: " + perimetro);
}
