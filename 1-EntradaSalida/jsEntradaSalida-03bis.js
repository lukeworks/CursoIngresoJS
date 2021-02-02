/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Enunciado: Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"

PUEDEN UTILIZAR EL HTML DEL EJERCICIO 3

DEBEN COMPARTIR EL CODIGO MEDIANTE UN ENLACE DE GDB, EN EL SIGUIENTE FORMULARIO*/

function mostrar()
{

var nombreDelAlumno = document.getElementById('txtIdNombre').value;

var edadDelAlumno = prompt("Por favor, ingrese su edad:");
	
	alert("Ud se llama: " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");
}