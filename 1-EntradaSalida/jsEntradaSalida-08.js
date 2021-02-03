/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H - Ejercicio 8
---------------------------------------
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	var dividendo;
	var divisor;

	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	var resto;
	// resto = dividendo / divisor; // Mal! utilice "/" que es divide y no me devuelve el resto. Para eso debo utilizar "%"
	resto = dividendo % divisor; // Mal! utilice "/" que es divide y no me devuelve el resto. Para eso debo utilizar "%"
	alert("El resto es: " + resto);
}

