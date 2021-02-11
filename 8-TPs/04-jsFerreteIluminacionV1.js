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
     cantidadLamparas = document.getElementById("txtIdCantidad").value;
     cantidadLamparas = parseInt(cantidadLamparas);

     var marcas;
     marcas = document.getElementById("Marca").value;

     var descuento;
     var precioFinal;

     if(cantidadLamparas < 5)
     {
         precioFinal = precioLampara * cantidadLamparas;
     }
     else
     {
         if(cantidadLamparas > 5)
         {
             precioFinal = (precioLampara * 50 / 100) * cantidadLamparas;
         }
         else
         {
             if(cantidadLamparas > 4)
             {
                 precioFinal = (precioLampara * 40 / 100) * cantidadLamparas;
             }
             else
             {
                 if(Marca != "ArgentinaLuz")
                 {
                     precioFinal = (precioLampara * 30 / 100) * cantidadLamparas;
                 }
             }
         }
     }
     txtIdprecioDescuento.value = "el precio es $" + precioFinal;
}
