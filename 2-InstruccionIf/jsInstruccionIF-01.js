/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 1 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//tomo la edad
	var edad;
	
	edad = document.getElementById("txtIdEdad").value;
	// edad = txtIdEdad.value;
	// toda operacion relacional devuelve un true o false.. (cualquier valor que no sea 0 o false (0))
	/*
	var resultado;
	resultado = edad == 15;
	alert(resultado);
	*/

	edad = parseInt(edad);
	// un solo "=" asigna un valor a la variable (no es una condición), "==" establece que la condición sea que esa variable sea igual a 15 (compara el valor asignado a la variable con el de la condición).
 	if(edad == 15) // si agregamos un ";" en esta línea, separará esta línea del bloque subsiguiente. Es decir, "niña bonita va a mostrarse siempre por mas que la condición es =="
	{
		alert("niña bonita");
	}
	else
	{
		alert("No niña bonita");
	}
}
//FIN DE LA FUNCIÓN

/*
if(condicion)
{
	Sentencias..
}
else
{
	otras sentencias..
}

Operadores:
Aritméticos: +, -, /, /, %
Relaciones: >, <, >=, <=, !=, ==
Lógicos: && (y), || (o), ! (no)
*/

