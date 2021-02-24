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
    var aumento;
    var descuento;
    var precioFinalConDescuento;
    var precioFinalConAumento;

    baseEstadia = 15000;

    localidad = document.getElementById("txtIdDestino").value;
    estacionAño = document.getElementById("txtIdEstacion").value;

    if(estacionAño == "Invierno")
    {
        if(localidad == "Bariloche")
        {
            aumento = 20;
            precioFinalConAumento = baseEstadia + (baseEstadia * aumento / 100);
            alert("La tarifa a pagar es: $" + precioFinalConAumento);
        }
        if(localidad == "Mar del plata")
        {
            descuento = 20;
            precioFinalConDescuento = baseEstadia - (baseEstadia * descuento /100);
            alert("La tarifa a pagar es: $" + precioFinalConDescuento);
        }
        else
        {
            descuento = 10;
            precioFinalConDescuento = baseEstadia - (baseEstadia * descuento /100);
            alert("La tarifa a pagar es: $" + precioFinalConDescuento);
        }

    }
    else
    {
        if(estacionAño == "Verano")
    {
        if(localidad == "Bariloche")
        {
            descuento = 20;
            precioFinalConDescuento = baseEstadia - (baseEstadia * descuento /100);
            alert("La tarifa a pagar es: $" + precioFinalConDescuento);
        }
        if(localidad == "Mar del plata")
        {
            aumento = 20;
            precioFinalConAumento = baseEstadia + (baseEstadia * aumento / 100);
            alert("La tarifa a pagar es: $" + precioFinalConAumento);
        }
        else
        {
            aumento = 10;
            precioFinalConAumento = baseEstadia + (baseEstadia * aumento / 100);
            alert("La tarifa a pagar es: $" + precioFinalConAumento);
        }
    }
    
    else
    {
        if(estacionAño == "Otoño" || estacionAño == "Primavera")
    {
        if(localidad == "Cordoba")
        {
            //precioFinal = baseEstadia;
            alert("La tarifa a pagar es: $" + baseEstadia);
        }
        else
        {
            aumento = 10;
            precioFinalConAumento = baseEstadia + (baseEstadia * aumento / 100);
            alert("La tarifa a pagar es: $" + precioFinalConAumento);
        }
    }
    }
}
    //precioFinalConAumento = baseEstadia + (baseEstadia * aumento / 100);
    //precioFinalConDescuento = baseEstadia - (baseEstadia * descuento /100);
    //alert("La tarifa a pagar es: " + precioFinalConDescuento);
}