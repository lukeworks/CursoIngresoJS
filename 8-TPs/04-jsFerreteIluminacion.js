/*
--------------------------------------------------------
Lucas Gonzalez Dall Ora 1H - TP 4 Ferrete iluminación
--------------------------------------------------------
Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio () 
{
     var precioLampara;
     precioLampara = 35;

     var cantidadLamparas;
     cantidadLamparas = txtIdCantidad.value;
     cantidadLamparas = parseInt(cantidadLamparas);

     var marcas;
     marcas = document.getElementById("Marca").value;

     var descuento;
     /*var precioSinDescuento;
     precioSinDescuento = parseFloat(precioSinDescuento);
     precioSinDescuento = precioLampara * cantidadLamparas < 5;
     txtIdprecioDescuento.value = "el precio es $" + precioSinDescuento;
     */
    //txtIdprecioDescuento.value = "el precio es $" + precioLampara * (cantidadLamparas < 4);
     
     // A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
     if(cantidadLamparas > 5)
     {
         descuento = precioLampara * 50 /100;
     }
     // B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
     else
     {
         if(cantidadLamparas = 5) // estaba usando = donde reduzco es que SOLO calcula esa cantidad.
         {
             if(marcas == 'ArgentinaLuz')
             {
                descuento = precioLampara * 40 /100;
             }
             if(marcas != 'ArgentinaLuz') // NO REPETIR LA MISMA ASIGNACION DE UNA VARIABLE!
             {
                 descuento = precioLampara * 30 /100;
             }
         }
         
     }
     txtIdprecioDescuento.value = "el precio es $" + (precioLampara - descuento) *cantidadLamparas;
}
