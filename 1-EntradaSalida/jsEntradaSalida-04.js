/*
---------------------------------------
Lucas Gonzalez Dall Ora 1H
---------------------------------------
Enunciado:
Debemos lograr tomar un dato por '=prompt()'
y lo muestro por ID.value
al presionar el botón 'mostrar'

ENTRADAS: prompt, id.value, document.getElementById("...").value
PROCESOS: concatenar (+)
SALIDAS: alert, console.log, document.write, id.value, document.getElementById("...").value

alert = BOM Browser Object Model
console.log = BOM
document.getElementById = DOM Document Object Model
------------------------------------------------
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	var nombreDelEmpleado;
	nombreDelEmpleado = prompt("Por favor, ingrese su nombre:");
	txtIdNombre.value = nombreDelEmpleado; // va a escribir del prompt al objeto ID en el documento HTML
	//document.getElementById(txtIdNombre).value;
}

