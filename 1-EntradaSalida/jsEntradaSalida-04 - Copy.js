/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Enunciado:
Pedirle al usuario por prompt 3 números, luego sumarlo y mostrar la suma de los mismos por pantalla en un alert
*/

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;

	numeroUno = prompt("Por favor, ingrese el primer número:");
	numeroUno = parseFloat(numeroUno);
	numeroDos = prompt("Por favor, ingrese el segundo número:");
	numeroDos = parseFloat(numeroDos);
	numeroTres = prompt("Por favor, ingrese el tercer número:");
	numeroTres = parseFloat(numeroTres);

	suma = numeroUno + numeroDos + numeroTres;

	alert("El resultado de la suma es: " + suma);
}

