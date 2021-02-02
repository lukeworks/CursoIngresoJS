/*
---------------------------------------
Lucas Gonzalez Dall Ora
---------------------------------------
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// mal -> var=apellido el "=" asigna un valor no asigná un nombre a la variable
	// mal -> var nombre =prompt("ingrese su nombre", );
	// nombre = "Lucas";
	// con prompt tomaremos una valor que se le asignará a la variable "nombre"
	var nombre = prompt("Por favor, ingrese su nombre:", "Magolla");
	//alert("nombre"); -> muestra el string "nombre"
	//alert(nombre); -> muestra el valor de la variable "nombre"
	alert("tu nombre es: "+nombre); // muestra el string "tu nobmre es" y se suma el valor de la variable
}

