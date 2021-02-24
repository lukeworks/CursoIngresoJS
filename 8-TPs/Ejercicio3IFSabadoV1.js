/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - Ej. 3 Sabado 13/2/2021
--------------------------------------------------------
Enunciado:
3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
 */
function CalcularTarifas () 
{
    var baseEstadia;
    var estacionAño;
    var localidad;
    var aumentoDescuento;
    var precioFinalConDescuento;
    var precioFinalConAumento;
    var precioAMostrar;

    baseEstadia = 15000;
    baseEstadia = parseInt(baseEstadia); // no lo parsee anteriormente ya que está definido como un valor fijo.
    aumentoDescuento = parseInt(aumentoDescuento);
    precioAMostrar = parseInt(precioAMostrar);
    //precioFinalConAumento = parseInt(precioFinalConAumento);
    //precioFinalConDescuento = parseInt(precioFinalConDescuento);

    localidad = document.getElementById("txtIdDestino").value;
    estacionAño = document.getElementById("txtIdEstacion").value;

    //precioAMostrar = parseFloat(precioAMostrar); // sin este parseo devuelve undefined
    //precioFinalConAumento = baseEstadia + (baseEstadia * (aumentoDescuento / 100));
    //precioFinalConAumento = parseFloat(precioFinalConAumento);
    //precioFinalConDescuento = baseEstadia - (baseEstadia * (aumentoDescuento /100));
    //precioFinalConDescuento = parseFloat(precioFinalConDescuento);
    //precioFinalConAumento = baseEstadia + (baseEstadia * aumentoDescuento / 100);
    //precioFinalConDescuento = baseEstadia - (baseEstadia * aumentoDescuento /100);
    precioAMostrar = baseEstadia + (baseEstadia * aumentoDescuento / 100);
    precioAMostrar = baseEstadia - (baseEstadia * aumentoDescuento /100);

    if(estacionAño == "Invierno")
    {
        if(localidad == "Bariloche")
        {
            aumentoDescuento = 20;
            //precioAMostrar = baseEstadia + (baseEstadia * aumentoDescuento / 100);
        }
        if(localidad == "Mar del plata")
        {
            aumentoDescuento = 20;
            //precioAMostrar = baseEstadia - (baseEstadia * aumentoDescuento /100);
        }
        else
        {
            aumentoDescuento = 10;
            //precioAMostrar = baseEstadia - (baseEstadia * aumentoDescuento /100);
        }
    }
    else
    {
        if(estacionAño == "Verano")
        {
            if(localidad == "Bariloche")
            {
                aumentoDescuento = 20;
                //precioAMostrar = baseEstadia - (baseEstadia * aumentoDescuento /100);
            }
            if(localidad == "Mar del plata")
            {
                aumentoDescuento = 20;
                //precioAMostrar = baseEstadia + (baseEstadia * aumentoDescuento / 100);
            }
            else
            {
                aumentoDescuento = 10;
                //precioAMostrar = baseEstadia + (baseEstadia * aumentoDescuento / 100);
            }
        }
        else
        {
            if(estacionAño == "Otoño" || estacionAño == "Primavera")
            {
                if(localidad == "Cordoba")
                {
                    precioAMostrar = baseEstadia;
                }
                else
                {
                    aumentoDescuento = 10;
                    //precioAMostrar = baseEstadia + (baseEstadia * aumentoDescuento / 100);
                }
            }
        }
    }

    alert("La tarifa a pagar es: $" + precioAMostrar);
}
