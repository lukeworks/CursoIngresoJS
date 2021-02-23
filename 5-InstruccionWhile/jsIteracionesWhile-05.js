/*
-------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 5 WHILE
-------------------------------------------------
Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/

function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f para femenino ó m para masculino: ");

	sexoIngresado = sexoIngresado.toLowerCase(); // con esto aseguro que pase todo a lower case

	while(sexoIngresado !="f" && sexoIngresado !="m") // tiene que ir un "y" lógico porque tienen que ser true ambas condiciones sino va a reenviar al prompt por mas que una este bien
	{
		sexoIngresado = prompt("Error! reingrese un valor: ");
		sexoIngresado = sexoIngresado.toLowerCase(); // soluciono el problema descrito abajo agregando esto luego del prompt dentro del while
	}
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN

// despues de agregar el toLowerCase, cuando ingreso primero un valor erróneo pero luego ingreso F o M (mayus), los toma como incorrectos.