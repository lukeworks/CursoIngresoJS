/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Switch Ej. 9
--------------------------------------------------------
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
    var baseEstadia;
    var estacionAño;
    var localidad;
    var aumento;
    var descuento;
    var precioAMostrar;

    localidad = document.getElementById("txtIdDestino").value;
    estacionAño = document.getElementById("txtIdEstacion").value;

    baseEstadia = 15000;
    //baseEstadia = parseInt(baseEstadia); // no lo parsee anteriormente ya que está definido como un valor fijo.

    switch (estacionAño) 
    {
        case "Invierno":
            switch (localidad) 
            {
                case "Bariloche":
                    aumento = 20;
                    break;
                case "Mar del plata":
                    descuento = 20;
                    break;
                    default:
                    descuento = 10;
                    break;
            }
            case "Verano":
                switch (localidad) 
                {
                    case "Bariloche":
                        descuento = 20;
                        break;
                    case "Mar del plata":
                        aumento = 20;
                        break;
                    default:
                        aumento = 10;
                        break;
                }
            case "Otoño":
            case "Primavera":
                switch (localidad) 
                {
                    case "Cordoba":
                        precioAMostrar = baseEstadia;
                        break;
                
                        default:
                        aumento = 10;
                        break;
                }
    }
    aumento = parseInt(aumento);
    precioAMostrar = baseEstadia + (baseEstadia * aumento / 100);
    descuento = parseInt(descuento);
    precioAMostrar = baseEstadia - (baseEstadia * descuento /100);

    alert("La tarifa a pagar es: $" + precioAMostrar);
}//FIN DE LA FUNCIÓN

// rehacer aplicando if else dentro del switch!
// OJO con los if else, tener muy en cuenta de que if depende el else