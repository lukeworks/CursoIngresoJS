/*
-------------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio IF 9 - Clase 4
-------------------------------------------------------------
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var random;
	//random = parseInt(random);
	random = Math.floor(Math.random() * 10) + 1;

	console.log(random);
}
//FIN DE LA FUNCIÓN