/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Enunciado:
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()" y Sumarlos.
mostrar el resulto por medio de "alert()"
ej.: "la suma es 750"
*/

function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	// entradas:
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	// conversión (parseo): El parseo permite transformar en este caso las variables string a integer
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos); // parseFloat = numero flotante (Ej: 1,24)
	
	// salida:
	suma = numeroUno + numeroDos; // operadores: + - / * ...
	alert("La suma es: " + suma);
}

