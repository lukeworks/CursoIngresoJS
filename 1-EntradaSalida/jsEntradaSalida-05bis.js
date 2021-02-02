/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
    var nombre;
    var edad;
    var apellido;
    
    nombre = document.getElementById('txtIdNombre').value;
    edad = document.getElementById('txtIdEdad').value;
    apellido = prompt("Por favor, ingrese su apellido");
	alert("Usted se llama " + nombre +" "+ apellido + " Y tiene " + edad + " años");
}