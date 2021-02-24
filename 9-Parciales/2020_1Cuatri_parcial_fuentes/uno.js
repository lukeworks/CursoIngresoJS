/*
Ejercicio 1 - Parcial 2020

Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var contadorProductos;
	var contadorCompras;
	var mensajeAlcoholBarato;
	var mensajeTipoMasUnidades;
	var mensajeJabon;
	var promedio;

	cantidadUnidades = 0; // para que? no es una variable de control, la cantidad es ingresada por el usuario..
	contadorProductos = 0;
	contadorCompras = 0;

	while(contadorProductos < 5)
	{
		tipo = prompt("Por favor, ingrese el " + (contadorProductos +1) + "°" + " producto:");
		
		if(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			alert("ERROR! El tipo de producto ingresado no puede ser validado.");
		}
		else
		{
			marca = prompt("por favor, ingrese la marca del producto:");
			fabricante = prompt("Por favor, ingrese el fabricante del producto:");
			precio = prompt("Por favor, ingrese el precio del producto:");
			if(precio < 100 || precio > 300)
			{
				alert("ERROR! El precio ingresado no puede ser validado.");
			}
			else
			{
				precio = parseFloat(precio);
				cantidadUnidades = prompt("Por favor, ingrese la cantidad de unidades a comprar del producto:");
				
				if(cantidadUnidades < 1 || cantidadUnidades > 1000)
				{
					alert("ERROR! La cantidad ingresada no puede ser validada.");
				}
				else
				{
					cantidadUnidades = parseInt(cantidadUnidades);
					contadorProductos++;
				}
				if(contadorProductos == 4)
				{
					contadorCompras++;
				}
			}

			if(tipo == "alcohol" && precio == Math.min(precio))
			{
				mensajeAlcoholBarato = "La cantidad de alcohol de menor precio es: " + cantidadUnidades + " y el fabricante es: " + fabricante + " ";
			}
			
			if(cantidadUnidades == Math.max(cantidadUnidades) && tipo.valueOf)
			{
				promedio = cantidadUnidades / contadorCompras;
				mensajeTipoMasUnidades = " del producto tipo: " + tipo + ", que tiene mayor cantidad de unidades, el promedio por compra es: " + promedio + " ";
			}
	
			if(tipo == "jabon")
			{
				mensajeJabon = " la cantidad de unidades de jabón es: " + cantidadUnidades;
			}
		}

	}

	alert(mensajeAlcoholBarato + mensajeTipoMasUnidades + mensajeJabon);
}
// precio >= 100 && precio <= 1000 && tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol" && cantidadUnidades > 0 && cantidadUnidades < 1001 && 