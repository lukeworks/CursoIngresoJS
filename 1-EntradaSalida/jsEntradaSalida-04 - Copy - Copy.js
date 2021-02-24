/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Enunciado:
Pedirle al usuario por prompt 10 números, luego sumarlo y mostrar la suma de los mismos por pantalla en un alert
*/

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	var numeroSeis;
	var numeroSiete;
	var numeroOcho;
	var numeroNueve;
	var numeroDiez;
	var suma;

	numeroUno = prompt("Por favor, ingrese el número:");
	numeroUno = parseFloat(numeroUno);
	numeroDos = prompt("Por favor, ingrese el número:");
	numeroDos = parseFloat(numeroDos);
	numeroTres = prompt("Por favor, ingrese el número:");
	numeroTres = parseFloat(numeroTres);
	numeroCuatro = prompt("Por favor, ingrese el número:");
	numeroCuatro = parseFloat(numeroCuatro);
	numeroCinco = prompt("Por favor, ingrese el número:");
	numeroCinco = parseFloat(numeroCinco);
	numeroSeis = prompt("Por favor, ingrese el número:");
	numeroSeis = parseFloat(numeroSeis);
	numeroSiete = prompt("Por favor, ingrese el número:");
	numeroSiete = parseFloat(numeroSiete);
	numeroOcho = prompt("Por favor, ingrese el número:");
	numeroOcho = parseFloat(numeroOcho);
	numeroNueve = prompt("Por favor, ingrese el número:");
	numeroNueve = parseFloat(numeroNueve);
	numeroDiez = prompt("Por favor, ingrese el número:");
	numeroDiez = parseFloat(numeroDiez);

	suma = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco + numeroSeis + numeroSiete + numeroOcho + numeroNueve + numeroDiez;

	alert("El resultado de la suma es: " + suma);
}

