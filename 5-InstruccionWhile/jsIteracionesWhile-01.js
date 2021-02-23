/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 1 WHILE
-------------------------------------------------
Enunciado:

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i; // variable de control (i, j , k , l..)
	i = 0; // si i < 10 y i = 0 --> se cumplen 10 iteranciones

	while(i < 10)
	{
		console.log((i + 1) + "-"); // con el i + 1 logro que en console incremente el valor a mostar, no el valor de la variable en si mismo (el uno que muestra en realidad el 0 +1) y al encontrarse antes de la operacion de suma, suma primero en la consola
		i = i +1; //sumo 1..
	}

}//FIN DE LA FUNCIÓN

/*
tareas repetitivas

determinada
indeterminada

	while(condicion)
	{
		sentencias que quiero repetir
		sentencia que hace que la condicion en algun momento se vuelva falsa
	}
*/