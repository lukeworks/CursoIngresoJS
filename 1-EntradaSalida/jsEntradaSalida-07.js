/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 7
---------------------------------------
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resultado por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// declaro primero las dos variables que se repiten en todas las funciones de abajo
// Nota: NO me permite vincular las variables a un ID si no es dentro de una función!

var numeroUno;
var numeroDos;

function sumar()
{	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var sumar;
	sumar = numeroUno + numeroDos;
	alert("la suma es: " + sumar);	
}

function restar()
{
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var restar;
	restar = numeroUno - numeroDos;
	alert("la resta es: " + restar);
}

function multiplicar()
{ 
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var multiplicar;
	multiplicar = numeroUno * numeroDos;
	alert("la multiplicación es: " + multiplicar);
}

function dividir()
{
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var dividir;
	dividir = numeroUno / numeroDos;

	// dividir = dividir.ToFixed(2); --> esto permite corregir el valor, en este caso, a la hora de obtener un resultado con decimales, estamos definiendo cuantas decimales tendra (en este caso 2)

	alert("la división es: " + dividir);
}

