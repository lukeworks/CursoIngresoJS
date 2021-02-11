/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 4 - Clase 4
-------------------------------------------------------------
Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	// && OPERADOR "and" = conjunción = ambas condiciones deben ser verdaderas.
	if (edad > 12 && edad < 18)
	// || OPERADOR "or" = disyunción = una de las condiciones debe ser veradera. -> por eso, en este caso, no nos sirve este operador
	//if (edad > 12 || edad < 18)
	{
		alert("Usted es un@ adolescente");
	}
}
/* alternativa para la conjunción:
Ideal para mas de dos condiciones, situaciones mas coplejas digamos..
if(edad > 12)
{
	if(edad < 18)
	{
		alert("Usted es un@ adolescente");
	}
}
*/